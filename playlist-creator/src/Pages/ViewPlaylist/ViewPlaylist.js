import React, { useEffect, useState } from "react";
import "./styles.css";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
const ViewPlaylist = () => {
  const [user, setUser] = useState(0);
  useEffect(() => {}, []);

  return (
    <body>
      <div class="sidebar">
        <a href="dashboard.html">
          <i class="fa fa-fw fa-home"></i> Home
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h2 class="move">Recommended Songs</h2>
      <div class="move">
        <table id="customer">
          <thead>
            <th>Song Name</th>
            <th>Artist</th>
            <th>Album</th>
            <th></th>
          </thead>
          <tbody>
            <tr>
              <td>How to Code</td>
              <td>Ammon</td>
              <td>CSE106</td>
              <td>
                <button class="add">
                  <i class="fa fa-fw fa-plus"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </body>
  );
};

export default ViewPlaylist;
