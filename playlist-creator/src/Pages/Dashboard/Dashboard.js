import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import Navbar from "../../Components/Navbar";
import { useNavigate } from "react-router-dom";
import RecSongs from "../../Components/Song";

// import "https://cdn6 8js.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
const Dashboard = () => {
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    axios
      .get(`https://cse-106-final-zuwe-master-vpc737kgfa-wm.a.run.app/UserHome`)
      .then((res) => {
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
                      state: { name: obj.name, ID: obj.ID, check: true },
                    })
                  }
                >
                  <img src="https://picsum.photos/id/39/200/300"></img>
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
