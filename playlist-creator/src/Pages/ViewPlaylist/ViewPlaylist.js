import React, { useEffect, useState } from "react";
import "./styles.css";
import Navbar from "../../Components/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import SongInfo from "../../Components/SongInfo";
import axios from "axios";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
const ViewPlaylist = () => {
  const [data, setSongs] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state.ID);
  useEffect(() => {
    axios
      .get(
        `https://cse-106-final-zuwe-master-vpc737kgfa-wm.a.run.app/UserHome/GetPlaylistSongs/${location.state.ID}`
      )
      .then((res) => {
        console.log(res.data);
        setSongs(res.data);
      });
  }, []);
  const delPlay = () => {
    axios
      .post(
        `https://cse-106-final-zuwe-master-vpc737kgfa-wm.a.run.app/UserHome/ModifyPlaylist/DeletePlaylist`,
        {
          playlist_ID: location.state.ID,
        }
      )

      .then((res) => {
        navigate("/Dashboard");
      });
  };
  return (
    <body>
      <Navbar />
      <br />
      <div class="move">
        <h2>{location.state.name}</h2>
      </div>
      <button onClick={() => delPlay()}>Delete Playlist</button>
      <br />
      <br />
      <div class="move">
        <table>
          <thead>
            <th>Song Name</th>
            <th>Artist</th>
            <th>Album</th>
            {location.state.check ? <th>Delete</th> : null}
          </thead>
          <tbody>
            {data.map((obj) => {
              return (
                <SongInfo
                  ID={parseInt(obj)}
                  playlists={[{}]}
                  modify={false}
                  delSong={location.state.check ? true : false}
                  playlist={location.state.ID}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </body>
  );
};

export default ViewPlaylist;
