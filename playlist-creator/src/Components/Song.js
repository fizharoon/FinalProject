import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import SongInfo from "./SongInfo";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
const RecSongs = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://cse-106-final-zuwe-master-vpc737kgfa-wm.a.run.app/UserHome/GetRecommendations`
      )
      .then((res) => {
        console.log(res.data);
        setData(Object.values(res.data));
      });
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
                  ID={obj}
                  playlists={props.playlists}
                  modify={true}
                  delSong={false}
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
