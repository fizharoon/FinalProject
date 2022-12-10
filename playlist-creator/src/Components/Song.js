import React, { useEffect, useState } from "react";
import "./styles.css";

const Song = () => {
  const [user, setUser] = useState(0);
  useEffect(() => { }, []);

  return (
    <main className="dashboard">
      <h1>Songs</h1>
      <body>
        <h2>Select songs</h2>
        <input type="checkbox" id="song" name="song1" value="song1" />
        <label for="song">song </label><br />
        <div id="root"></div>
        <button id="btn">Play </button>
        <button id="btn">Add to playlist</button>
      </body>
    </main>

  );

};

export default Song;
