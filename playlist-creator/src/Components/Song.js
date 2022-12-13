import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import SongInfo from "./SongInfo";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
const RecSongs = (props) => {
  const [user, setUser] = useState(0);

  let data = [
    {
      song: "Song One",
      ID: "10",
      artist: "Artist",
      album: "new Ablum",
    },
    {
      song: "Song Two",
      ID: "11",
      artist: "Artist",
      album: "new Ablum",
    },
    {
      song: "Song Three",
      ID: "12",
      artist: "Artist",
      album: "new Ablum",
    },
    {
      song: "Song Four",
      ID: "13",
      artist: "Artist",
      album: "new Ablum",
    },
    {
      song: "Song Five",
      ID: "14",
      artist: "Artist",
      album: "new Ablum",
    },
  ];
  useEffect(() => {
    // axios
    //   .get(`http://127.0.0.1:5000/UserHome/GetRecommendations`)
    //   .then((res) => {
    //     console.log("YEET");
    //     console.log(res);
    //   });
  }, []);

  return (
    <div>
      <div class="move">
        <h2>Recommended Songs</h2>
      </div>
      <br />
      <div class="move">
        <table id="RecSongsTable">
          <thead>
            <th>Song Name</th>
            <th>Artist</th>
            <th>Album</th>
            <th></th>
          </thead>
          <tbody>
            {data.map((obj) => {
              return (
                <SongInfo
                  ID={obj.ID}
                  playlists={props.playlists}
                  modify={true}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// };

export default RecSongs;
