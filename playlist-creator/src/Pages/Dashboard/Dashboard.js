import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"

const Dashboard = () => {
  const [user, setUser] = useState(0);
  useEffect(() => {}, []);

  axios
    .get(`http://127.0.0.1:5000/`, {
      username: "Sean",
      password: "Testing",
    })

    .then((res) => {
      console.log("YEET");
      console.log(res);
    });
  return (
/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> */

<body>

<div class="sidebar">
  <a href="#home"><i class="fa fa-fw fa-home"></i> Home</a>
  <a href="createplaylist.html"><i class="fa fa-fw fa-plus-square"></i> Create Playlist</a>
  <a href="playlist.html"><i class="fa fa-fw fa-heart-o"></i> My Songs </a>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <a href="login.html">Logout <i class="fa fa-fw fa-sign-out"></i></a>
</div>

<div class="main">
  <h2>My Playlists</h2>
    <button class="playlist"><img src="album.png"/>Coding Playlist</button>
  <h2>Recommended Songs</h2>
    <div >
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
                    <td><button class="add"><i class="fa fa-fw fa-plus"></i></button></td>
                </tr>
            </tbody>
        </table>
</div>


</div>

</body>

  );
};

export default Dashboard;
