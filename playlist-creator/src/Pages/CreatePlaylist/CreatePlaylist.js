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
      <div class="move">
        <input type="text" id="playlistname" />
        <button>Create</button>
      </div>
      <RecSongs />
    </body>
  );
};

export default CreatePlaylist;
