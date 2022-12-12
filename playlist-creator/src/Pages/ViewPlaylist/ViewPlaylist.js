import React, { useEffect, useState } from "react";
import "./styles.css";
import Navbar from "../../Components/Navbar";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
const ViewPlaylist = () => {
  const [user, setUser] = useState(0);
  useEffect(() => {}, []);

  return (
    <body>
      <Navbar />
      <br />
      <div class="move">
        <h2>Playlist 1</h2>
      </div>
      <br />
      <br />
      <div class="move">
        <table>
          <thead>
            <th>Song Name</th>
            <th>Artist</th>
            <th>Album</th>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </body>
  );
};

export default ViewPlaylist;
