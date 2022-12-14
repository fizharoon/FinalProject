import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar";
import { useNavigate } from "react-router-dom";
import RecSongs from "../../Components/Song";
import Playlist from "../../Components/Playlist";
// import "https://cdn6 8js.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
const ViewLikedPlaylists = () => {
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://cse-106-final-zuwe-master-vpc737kgfa-wm.a.run.app/GetLikedPlaylists`
      )
      .then((res) => {
        console.log(res.data);
        setPlaylists(res.data);
      });
  }, []);
  const navigate = useNavigate();
  console.log(playlists);

  return (
    <body>
      <Navbar />

      <div class="main">
        <h2>My Playlists</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            width: "80%",
          }}
        >
          {playlists[0] != ""
            ? playlists.map((obj) => {
                return <Playlist ID={obj} />;
              })
            : null}
        </div>
      </div>
    </body>
  );
};

export default ViewLikedPlaylists;
