import React, { useEffect, useState } from "react";
import "./styles.css";
import RecSongs from "../../Components/Song";
import Navbar from "../../Components/Navbar";

// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
const CreatePlaylist = () => {
  const [user, setUser] = useState(0);
  useEffect(() => {}, []);

  return (
    <body>
      <Navbar />

      <div class="sidebar">
        <a href="dashboard.html">
          <i class="fa fa-fw fa-home"></i> Home
        </a>
        <a href="search.html">
          <i class="fa fa-fw fa-search"></i> Search
        </a>
        <a href="createplaylist.html">
          <i class="fa fa-fw fa-plus-square"></i> Create Playlist
        </a>
        <a href="playlist.html">
          <i class="fa fa-fw fa-heart-o"></i> My Playlists{" "}
        </a>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <a href="login.html">
          Logout <i class="fa fa-fw fa-sign-out"></i>
        </a>
      </div>
      <br />
      <div class="move">
        <input type="text" id="playlistname" />
        <button>Create</button>
      </div>
      <RecSongs />
    </body>
  );
};

export default CreatePlaylist;
