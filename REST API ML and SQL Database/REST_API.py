from sqlalchemy.ext.declarative import declarative_base
import json
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_admin import Admin
import sqlalchemy as db
from flask_admin.contrib.sqla import ModelView
import os
import pandas as pd
from TableSetUp import Reset_Database
from flask_cors import CORS
import pickle
import hashlib
from math import ceil
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import numpy as np

try:
    os.system("cls")
except:
    pass

# Returned Access Points for each of the Tables
songs, users, playlists, df = Reset_Database()
app = Flask(__name__)

CORS(app)

engine = db.create_engine('sqlite:///SongDataBase.sqlite?check_same_thread=False')
conn = engine.connect()

# define declarative base
Base = declarative_base()

# reflect current database engine to metadata
metadata = db.MetaData(engine)
metadata.reflect()

# build your User class on existing users table
class Songs(Base):
    __table__ = db.Table('Songs', Base.metadata,
                         autoload=True, autoload_with=engine)

class Users(Base):
    __table__ = db.Table('Users', Base.metadata,
                         autoload=True, autoload_with=engine)

class Playlists(Base):
    __table__ = db.Table('playlists', Base.metadata,
                         autoload=True, autoload_with=engine)

Session = db.orm.sessionmaker(engine)
session = Session()

global ID
ID = ""

global salt
salt = "f1nd1ngn3m0"

global Initial_Log_In
Initial_Log_In = False

global selected_genres
selected_genres = []

global selected_artists
global recommended_songs
global recommended_tracks
global train_data
global train_labels

# Register a user account
@app.route('/register', methods=['POST'])
def Register():

    if (request.method == "POST"):
        print(request.method)

        user_name = request.json['username']
        password = request.json['password']

        password += salt

        User_ID = session.query(Users).count()
 
        query = db.insert(users).values(User_ID=User_ID, User_Name=user_name, password=hashlib.sha256(password.encode()).hexdigest())
        conn.execute(query)

        new_Playlist_ID = session.query(Playlists).count()

        query = db.insert(Playlists).values(playlists_ID=new_Playlist_ID, playlist_name='Liked Songs', User_ID = 0, songs = '')
        conn.execute(query)

        return {0:0}

# Login to user account
@app.route('/login/<user_name>/<password>', methods=['GET'])
def Login(user_name, password):

    global ID

    if (request.method == "GET"):
        print(request.method)

        HT = {}

        password += salt

        USERS = metadata.tables['Users']
        query = db.select(USERS).where(USERS.c.User_Name == user_name)
        
        result = engine.execute(query).fetchall()

        for row in result:
            if row[1] == user_name and row[2] == hashlib.sha256(password.encode()).hexdigest():
                ID = row[0]
                HT[0] = 0
                return json.dumps(HT)
        
        HT[1] = 1

        return json.dumps(HT)

# Get Information needed onload of the user's homepage (playlists)
@app.route('/UserHome', methods=['GET'])
def GetHomeInfo():

    # Return the Names of the Playlists linked to the user
    pass

# Get all the Genres 
@app.route('/SetUp/GetGenres', methods=['GET'])
def GetGenres():
    if (request.method == "GET"):
        print(request.method)

        HT = {}

        SONGS = metadata.tables['Songs']
        query = db.select(SONGS.c.track_genre).distinct()

        result = engine.execute(query).fetchall()

        for i, genre in enumerate(result):
            HT[i] = genre[0]

        return json.dumps(HT)

# Send selected Genres
@app.route('/SetUp/SetGenres', methods=['POST'])
def SetGenres():

    global selected_genres

    if (request.method == "POST"):
        # Expects a json of selected_genres
        selected_genres = request.json
        
        for item in selected_genres:
            selected_genres.append(item)

# Get Top ~50 Recommended Artists
@app.route('/SetUp/GetArtists', methods=['GET'])
def GetArtists():

    global recommended_songs

    if (request.method == "GET"):
        
        # Create a 
        recommended_songs = pd.concat([df.loc[df['track_genre'] == genre] for genre in selected_genres], ignore_index=True, sort=False)
        
        HT = {}

        for i in range(recommended_songs.shape[0]):
            
            if recommended_songs[['track_genre']].iloc[i][0] not in HT:
                HT[recommended_songs[['track_genre']].iloc[i][0]] = {}
            
            if recommended_songs[['artists']].iloc[i][0] not in HT[recommended_songs[['track_genre']].iloc[i][0]]:
                HT[recommended_songs[['track_genre']].iloc[i][0]][recommended_songs[['artists']].iloc[i][0]] = float(recommended_songs[['popularity']].iloc[i][0])
            elif HT[recommended_songs[['track_genre']].iloc[i][0]][recommended_songs[['artists']].iloc[i][0]] < float(recommended_songs[['popularity']].iloc[i][0]):
                HT[recommended_songs[['track_genre']].iloc[i][0]][recommended_songs[['artists']].iloc[i][0]] = float(recommended_songs[['popularity']].iloc[i][0])
                
        for genre in HT:
            print(f"Sorted all entries for {genre} ;)")
            HT[genre] = {k: v for k, v in sorted(HT[genre].items(), key=lambda item: item[1])}

        recommended_artists = []
        result_limit = 50
        limit_per_genre = int(result_limit/len(selected_genres))

        temp = []
        for genre in selected_genres:
            temp.extend(list(HT[genre])[::-1][0:limit_per_genre])

        for entry in temp:
            recommended_artists.extend(entry.split(";"))

        recommended_artists = list(set(recommended_artists))
            
        # print(recommended_artists, len(recommended_artists))

        data = {}

        for i, artist in enumerate(recommended_artists):
            data[i] = artist

        return json.dumps(data)

# Send selected Artists
@app.route('/SetUp/SetArtists', methods=['POST'])
def SetArtists():
    global selected_artists

    if (request.method == "POST"):
        
        selected_artists = []

        # Expects a json of selected_artists
        artists = request.json
        
        for item in artists:
            selected_artists.append(item)

# Get Top ~50 Recommended Songs 
@app.route('/SetUp/GetSongs', methods=['GET'])
def GetSongs():

    global selected_artists
    global recommended_tracks

    if(request.method == 'GET'):
        recommended_tracks = []
        track_limit = 50
        artist_track_limit = ceil(track_limit/len(selected_artists))

        for artist in selected_artists:
            
            if len(list(set(recommended_songs[recommended_songs['artists'] == artist].sort_values(by=['popularity'], ascending=False)['track_name']))) < artist_track_limit:
                recommended_tracks.extend(list(set(recommended_songs[recommended_songs['artists'] == artist].sort_values(by=['popularity'], ascending=False)['track_name'])))
            
            else:
                recommended_tracks.extend(list(set(recommended_songs[recommended_songs['artists'] == artist].sort_values(by=['popularity'], ascending=False)['track_name']))[0:artist_track_limit])
        
        HT = {}

        for i, track in enumerate(recommended_tracks):
            HT[i] = track
        
        return json.dumps(HT)

# Send selected Songs and their Labels
@app.route('/SetUp/SetSongs', methods=['POST'])
def SetSongs():

    global recommended_tracks
    global train_data
    global train_labels

    if(request.method == 'POST'):
        # train_data = pd.DataFrame()
        train_labels = []
        
        # Expects a json of labels
        labels = request.json

        for i, track in enumerate(recommended_tracks):
            
            # Append the track's info to the train_data
            if(i == 0):
                train_data = recommended_songs[recommended_songs['track_name'] == track].drop_duplicates(subset = "track_name")
            else:
                train_data = train_data.append(recommended_songs[recommended_songs['track_name'] == track].drop_duplicates(subset = "track_name"))
                 
            # Save a label for each track            
            train_labels.append(labels[i])

# Train and Save a Model on selected Songs in the Users Table
@app.route('/SetUp/TrainModel', methods=['POST'])
def TrainModel():

    global train_data
    global train_labels

    if(request.method == 'POST'):

        train_data['labels'] = train_labels

        encoding_columns = ['artists', 'album_name', 'track_name', 'explicit', 'track_genre']
        Encoding_Dict = {}

        for column in encoding_columns:
            
            Encoding_Dict[column] = {}
            
            for i, entry in enumerate(set(train_data[column])):
                Encoding_Dict[column][entry] = i
                
        for column in encoding_columns:
            temp = []
            for i, entry in enumerate(train_data[column]):
                temp.append(Encoding_Dict[column][entry])
            
            train_data[column] = temp

        training_data, validation_data, training_labels, validation_labels = train_test_split(train_data.loc[:,train_data.columns != 'labels'], train_data.loc[:,train_data.columns == 'labels'], test_size=0.2)

        # Random Forest Model

        #--------------------------------Grid-Search------------------------------------

        depths = []
        train_results = []
        valid_results = []

        for i in range(1, 10):
            clf = RandomForestClassifier(max_depth=(i), n_estimators = 19, random_state=0)

            clf.fit(np.array(training_data), np.array(training_labels).ravel())
            
            y_pred = clf.predict(np.array(training_data))
            train_results.append(accuracy_score(np.array(training_labels).ravel(), y_pred))

            y_pred = clf.predict(np.array(validation_data))
            valid_results.append(accuracy_score(np.array(validation_labels).ravel(), y_pred))
            
            depths.append(i)

        optimial_depth = 0
        curr_best_valid = 0

        for i, val_score in enumerate(valid_results):
            if train_results[i] > val_score:
                if val_score >= curr_best_valid:
                    curr_best_valid = val_score
                    optimial_depth = i + 1

        print(f"Optimal Depth: {optimial_depth}\n")

        # -------------------------------Best_HyperParameters--------------------------------------
        clf = RandomForestClassifier(max_depth=optimial_depth, n_estimators = 19, random_state=0)

        clf.fit(np.array(training_data), np.array(training_labels).ravel())

        y_pred = clf.predict(np.array(training_data))
        print(f'Accuracy of the training set: {accuracy_score(np.array(training_labels).ravel(), y_pred)}\n')

        y_pred = clf.predict(np.array(validation_data))
        print(f'Accuracy of the validation set: {accuracy_score(np.array(validation_labels).ravel(), y_pred)}\n')

        clf2 = pickle.dumps(clf)
            
        q = f"""UPDATE Users
        SET ML_Model = {clf2}
        WHERE User_ID == 0;"""

        result=conn.execute(q)

# Use the ML Model to get song recommendations
@app.route('/UserHome/GetRecommendations', methods=['GET'])
def GetRecommendations():

    global ID
    global recommended_songs

    if(request.method == 'GET'):

        USERS = metadata.tables['Users']

        # SQLAlchemy Query to select all rows with
        query = db.select(USERS).where(USERS.c.User_ID == ID)
        
        # Fetch all the records
        result = engine.execute(query).fetchall()

        # Load the model
        clf = pickle.loads(result[0][3])

        # Use Model to get dong recommendations
        sample_set = recommended_songs.sample(n=50)

        encoding_columns = ['artists', 'album_name', 'track_name', 'explicit', 'track_genre']
        Encoding_Dict = {}

        for column in encoding_columns:
            
            Encoding_Dict[column] = {}
            
            for i, entry in enumerate(set(sample_set[column])):
                Encoding_Dict[column][entry] = i

        for column in encoding_columns:
            temp = []
            for i, entry in enumerate(sample_set[column]):
                temp.append(Encoding_Dict[column][entry])
            
            sample_set[column] = temp

        new_songs = clf.predict(sample_set)

        HT = {}

        j = 0
        for i, recommended in enumerate(new_songs):
            if recommended == 1:
                HT[j] = f"{list(Encoding_Dict['track_name'].keys())[list(Encoding_Dict['track_name'].values()).index(int(sample_set.iloc[i,[2]]))]}, {list(Encoding_Dict['artists'].keys())[list(Encoding_Dict['artists'].values()).index(int(sample_set.iloc[i,[0]]))]})"
                j += 1

        return json.dumps(HT)        

# Get the songs in the playlist
@app.route('/UserHome/GetPlaylist/<playlist>', methods=['GET'])
def GetPlaylist(playlist):

    # Return the songs in each playlist

    if(request.method == 'GET'):

        # SQLAlchemy Query to select all rows with
        query = db.select(Playlists).where(Playlists.c.User_ID == ID and Playlists.c.playlist_name == playlist)
        
        # Fetch all the records
        result = engine.execute(query).fetchall()
        
        HT = {}

        HT[0] = result[0][3]

        return json.dumps(HT)

# Add a song to a playlist
@app.route('/UserHome/ModifyPlaylist/AddSong/<playlist>/<song>', methods=['PUT'])
def AddSong(playlist, song):

    # Add a song to the playlist

    if(request.method == 'PUT'):

        # SQLAlchemy Query to select all rows with
        query = db.select(Playlists).where(Playlists.c.User_ID == ID and Playlists.c.playlist_name == playlist)
        
        # Fetch all the records
        result = engine.execute(query).fetchall()
        
        new_songs = result[0][3] + "; " + song

        q = f"""UPDATE Playlists
        SET songs = {new_songs}
        WHERE User_D == {ID} and playlist_name == {playlist};"""

        result=conn.execute(q)

# Delete a song from a playlist
@app.route('/UserHome/ModifyPlaylist/DeleteSong/<playlist>/<song>', methods=['PUT'])
def DeleteSong(playlist, song):

    # Delete a song to the playlist

    if(request.method == 'PUT'):

        # SQLAlchemy Query to select all rows with
        query = db.select(Playlists).where(Playlists.c.User_ID == ID and Playlists.c.playlist_name == playlist)
        
        # Fetch all the records
        result = engine.execute(query).fetchall()
        
        # The format of songs will be : {Sorry, Justin Beiber;O.N, BTS; ...}
        try:
            list_of_songs = result[0][3].split(";")    
            list_of_songs = list_of_songs.split(';')
            list_of_songs.pop(list_of_songs.index(song))
        except:
            pass

        q = f"""UPDATE Playlists
        SET songs = {list_of_songs}
        WHERE User_D == {ID} and playlist_name == {playlist};"""

        result=conn.execute(q)


admin = Admin(app)
admin.add_view(ModelView(Songs, session))
admin.add_view(ModelView(Users, session))
admin.add_view(ModelView(Playlists, session))
app.run()
