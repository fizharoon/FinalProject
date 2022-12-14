import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar";
import { useNavigate } from "react-router-dom";
import RecSongs from "../../Components/Song";

// import "https://cdn6 8js.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
const ViewAllPlaylists = () => {
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://cse-106-final-zuwe-master-vpc737kgfa-wm.a.run.app/GetAllPlaylists`
      )
      .then((res) => {
        console.log(res.data);
        setPlaylists(res.data);
      });
  }, []);
  const navigate = useNavigate();

  const likePlaylist = (ID) => {
    axios
      .post(
        `https://cse-106-final-zuwe-master-vpc737kgfa-wm.a.run.app/LikePlaylist`,
        {
          playlist_ID: ID,
        }
      )
      .then((res) => {
        console.log("YEET");
        console.log(res);
      });

    navigate("/Dashboard");
  };
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
          {playlists.map((obj) => {
            return (
              <div style={{ flex: 1, margin: 20 }}>
                <button
                  class="playlist"
                  onClick={() =>
                    navigate("/ViewPlaylist", {
                      state: { name: obj.name, ID: obj.ID, check: false },
                    })
                  }
                >
                  <img src="https://picsum.photos/id/39/200/300"></img>
                  {obj.name}
                </button>
                <button
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    alignContent: "center",
                    marginLeft: "50%",
                  }}
                  onClick={() => likePlaylist(obj.ID)}
                >
                  Like
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </body>
  );
};

export default ViewAllPlaylists;
