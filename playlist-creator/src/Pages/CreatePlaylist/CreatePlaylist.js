import React, { useEffect, useState } from "react";
import "./styles.css";
import RecSongs from "../../Components/Song";
import Navbar from "../../Components/Navbar";
import axios from "axios";
const CreatePlaylist = () => {
  const [name, setName] = useState("");
  useEffect(() => {}, []);

  const createPlaylist = (e) => {
    e.preventDefault();

    // axios
    //   .post(`http://127.0.0.1:5000/login`, {
    //     name: name,
    //   })

    //   .then((res) => {
    //     console.log("YEET");
    //     console.log(res);
    //     if (res.data[0] == 200) {
    //       setName("");
    //     }
    //   });
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
