import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
const RecSongs = () => {
  const [user, setUser] = useState(0);

  let data = [
    {
      song: "Song One",
      ID: "1",
      artist: "Artist",
      album: "new Ablum",
    },
    {
      song: "Song Two",
      ID: "2",
      artist: "Artist",
      album: "new Ablum",
    },
    {
      song: "Song Three",
      ID: "3",
      artist: "Artist",
      album: "new Ablum",
    },
    {
      song: "Song Four",
      ID: "4",
      artist: "Artist",
      album: "new Ablum",
    },
    {
      song: "Song Five",
      ID: "5",
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
      <h2>Recommended Songs</h2>
      <div>
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
                <tr>
                  <td>{obj.song}</td>
                  <td>{obj.artist}</td>
                  <td>{obj.album}</td>
                  <td>
                    <button class="add">
                      <i class="fa fa-fw fa-plus"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecSongs;
