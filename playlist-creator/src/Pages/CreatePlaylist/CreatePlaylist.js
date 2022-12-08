import React, { useEffect, useState } from "react";
import "./styles.css";

const CreatePlaylist = () => {
  const [user, setUser] = useState(0);
  useEffect(() => {}, []);

  return (
    <main className="dashboard">
      <h1>CreatePlaylist</h1>

      <h2>Select songs</h2>
        <input type="checkbox" id="song" name="track1" value="track1" />
        <label for="track1">track1 </label><br />
        <div id="root"></div>
        <button id="btn">Submit</button>

    </main>
  );
};

export default CreatePlaylist;
