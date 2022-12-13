import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import Navbar from "../../Components/Navbar";
import { useNavigate } from "react-router-dom";
import RecSongs from "../../Components/Song";

// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
const Dashboard = () => {
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/UserHome`).then((res) => {
      console.log("YEET");
      console.log(res.data);
      setPlaylists(res.data);
    });
  }, []);
  const navigate = useNavigate();

  return (
    <body>
      <Navbar />

      <div class="main">
        <h2>My Playlists</h2>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {playlists.map((obj) => {
            return (
              <div style={{ flex: 1 }}>
                <button
                  class="playlist"
                  onClick={() =>
                    navigate("/ViewPlaylist", {
                      state: { name: obj.name, ID: obj.ID },
                    })
                  }
                >
                  {obj.name}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <RecSongs playlists={playlists} />
    </body>
  );
};

export default Dashboard;
