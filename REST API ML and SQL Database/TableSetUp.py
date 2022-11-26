import sqlalchemy as db
from sqlalchemy import select, Table
import pandas as pd
from console_progressbar import ProgressBar

try:
    import os
    os.system('cls')
except:
    pass

# Routine for dropping all tables

def Drop_Table(table):

    sql = f'DROP TABLE IF EXISTS {table};'
    engine.execute(sql)

# Routines for defining each table

def Initialize_Songs(df):

    # Define and Create the Songs Table
    Songs = db.Table('Songs', metadata,
        db.Column('song_ID', db.Integer(), primary_key=True, nullable=False),
        db.Column('track_ID', db.String(255), nullable=False),
        db.Column('artists', db.String(255), nullable=False),
        db.Column('album_name', db.String(255), nullable=False),
        db.Column('track_name', db.String(255), nullable=False),
        db.Column('popularity', db.Integer(), nullable=False),
        db.Column('duration_ms', db.Integer(), nullable=False),
        db.Column('explicit', db.Boolean(), nullable=False),
        db.Column('danceability', db.Float(), nullable=False),
        db.Column('energy', db.Float(), nullable=False),
        db.Column('key', db.Integer(), nullable=False),
        db.Column('loudness', db.Float(), nullable=False),
        db.Column('mode', db.Integer(), nullable=False),
        db.Column('speechiness', db.Float(), nullable=False),
        db.Column('acousticness', db.Float(), nullable=False),
        db.Column('instrumentalness', db.Float(), nullable=False),
        db.Column('liveness', db.Float(), nullable=False),
        db.Column('valence', db.Float(), nullable=False),
        db.Column('tempo', db.Float(), nullable=False),
        db.Column('time_signature', db.Integer(), nullable=False),
        db.Column('track_genre', db.String(255), nullable=False)
    )

    metadata.create_all(engine)  # Creates the table

    # Populate the Songs Table
        
    pb = ProgressBar(total=df.shape[0], suffix='Completed', decimals=3, length=50, fill='X', zfill='-')
        
    for i in range(df.shape[0]):

        try:
            query = db.insert(Songs).values(song_ID=i, track_ID=df.iloc[i][1], artists=df.iloc[i][2],
            album_name=df.iloc[i][3], track_name=df.iloc[i][4], popularity=int(df.iloc[i][5]),
            duration_ms=int(df.iloc[i][6]), explicit=df.iloc[i][7], danceability=df.iloc[i][8],
            energy=df.iloc[i][9], key=int(df.iloc[i][10]), loudness=df.iloc[i][11], mode=int(df.iloc[i][12]),
            speechiness=df.iloc[i][13], acousticness=df.iloc[i][14], instrumentalness=df.iloc[i][15],
            liveness=df.iloc[i][16], valence=df.iloc[i][17], tempo=df.iloc[i][18], time_signature=float(df.iloc[i][19]),
            track_genre=df.iloc[i][20])
            conn.execute(query)

        except:
            pass

        pb.print_progress_bar(i)

    return Songs

def Initialize_Users():

    # Define and Create the Users Table
    Users = db.Table('Users', metadata,
        db.Column('User_ID', db.Integer(), primary_key=True, nullable=False),
        db.Column('User_Name', db.String(255), nullable=False),
        db.Column('password', db.String(255), nullable=False),
        db.Column('ML_Model', db.PickleType(), nullable=True)
    )

    metadata.create_all(engine)  # Creates the table

def Initialize_Playlists():

    # Define and Create the Playlists Table
    Playlists = db.Table('Playlists', metadata,
        db.Column('playlists_ID', db.Integer(), primary_key=True, nullable=False),
        db.Column('playlist_name', db.String(255), nullable=False),
        db.Column('User_ID', db.Integer(), nullable=False),
        db.Column('songs', db.String(255), nullable=False)
    )

    metadata.create_all(engine)  # Creates the table

# Connect to the database
engine = db.create_engine(
    'sqlite:///SongDataBase.sqlite?check_same_thread=False')
conn = engine.connect()
metadata = db.MetaData()

# Reset the database

def Reset_Database():

    df = pd.read_csv('dataset.csv')

    try:
        songs = Table('Songs', metadata, autoload=True, autoload_with=engine)
    except:
        Drop_Table('Songs')
        songs = Initialize_Songs(df)

    try:
        users = Table('Users', metadata, autoload=True, autoload_with=engine)
    except:
        Drop_Table('Users')
        users = Initialize_Users()

    try:
        playlists = Table('Playlists', metadata, autoload=True, autoload_with=engine)
    except:
        Drop_Table('Playlists')
        playlists = Initialize_Playlists()

    print("Database Ready!\n")

    return songs, users, playlists, df