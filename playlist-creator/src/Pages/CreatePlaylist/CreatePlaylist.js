import React, { useEffect, useState } from "react";
import "./styles.css";
import RecSongs from "../../Components/Song";
import Navbar from "../../Components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreatePlaylist = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const createPlaylist = (e) => {
    e.preventDefault();

    axios
      .post(
        `https://cse-106-final-zuwe-master-vpc737kgfa-wm.a.run.app/UserHome/CreatePlaylist`,
        {
          playlistName: name,
        }
      )

      .then((res) => {
        console.log("YEET");
        console.log(res);
        if (res.data[0] == 200) {
          setName("");
        }
        navigate("/Dashboard");
      });
    console.log(name);
  };
  return (
    <body>
      <Navbar />
      <div class="header">
        <div>
          <h1>Create Playlist</h1>
        </div>
      </div>

      <div class="body">
        <form onSubmit={(e) => createPlaylist(e)}>
          <label for="username">Playlist Name:</label>

          <input
            value={name}
            id="playlistname"
            onChange={(event) => setName(event.target.value)}
          />
          <button class="newButton" type="submit">
            Create
          </button>
        </form>
      </div>
    </body>
  );
};

export default CreatePlaylist;
