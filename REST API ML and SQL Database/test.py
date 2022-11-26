from sqlalchemy.ext.declarative import declarative_base
import sqlalchemy as db
from sqlalchemy import select
from TableSetUp import Reset_Database
from sqlalchemy.orm import sessionmaker
from sqlalchemy import func
import hashlib
import json

engine = db.create_engine('sqlite:///SongDataBase.sqlite?check_same_thread=False')
conn = engine.connect()

Session = sessionmaker(bind = engine)
session = Session()
 

# Returned Access Points for each of the Tables
songs, users, playlists, df = Reset_Database()

# define declarative base
Base = declarative_base()

# reflect current database engine to metadata
metadata = db.MetaData(engine)
metadata.reflect()

class Songs(Base):
    __table__ = db.Table('Songs', Base.metadata,
                         autoload=True, autoload_with=engine)

class Users(Base):
    __table__ = db.Table('Users', Base.metadata,
                         autoload=True, autoload_with=engine)

class Playlists(Base):
    __table__ = db.Table('playlists', Base.metadata,
                         autoload=True, autoload_with=engine)


data = {}

for i in range(3):
    data[i] = i*2

data = json.dumps(data)

global salt
salt = "f1nd1ngn3m0"

# Test out queries here!

# results = conn.execute(select([Songs.artists, Songs.track_name]).where((Songs.artists == 'Justin Bieber')).distinct())


# SELECT COUNT(*) FROM Songs
# result = session.query(Users).count()
# print(result)

password = "ANsubswi"
user_name = "Abbas"

password += salt

new_Playlist_ID = session.query(Playlists).count()

# query = db.insert(Playlists).values(playlists_ID=new_Playlist_ID, playlist_name='Liked Songs', User_ID = 0, songs = '')
# conn.execute(query)

# Delete the Latest Entry in Users
q = f"DELETE from Playlists WHERE playlists_ID={new_Playlist_ID - 1}"
result=conn.execute(q)

# # Select user_IDs WHERE user_name == Abbas
# USERS = metadata.tables['Users']
 
# # SQLAlchemy Query to select all rows with
# query = db.select(USERS).where(USERS.c.User_ID == 0)
 
# # Fetch all the records
# result = engine.execute(query).fetchall()
# print(result[0][3])

# Update the ML Model for user
# clf = 0

# q = f"""UPDATE Users
#  SET ML_Model = {clf}
#  WHERE User_ID == 0;"""

# result=conn.execute(q)

# for row in json.load(data):
    # print(row)

# s = "Sorry, Justin Beiber;Silence, A"
# s = s.split(';')

# s.pop(s.index('Sorry, Justin Beiber'))

# print(s)