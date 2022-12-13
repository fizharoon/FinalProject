import React, { useEffect, useState } from "react";
import "./styles.css";
import Navbar from "../../Components/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import SongInfo from "../../Components/SongInfo";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
const ViewPlaylist = () => {
  const [user, setUser] = useState(0);
  useEffect(() => {}, []);
  const navigate = useNavigate();
  const location = useLocation();
  let data = [
    {
      song: "Song One",
      ID: "1",
      artist: "Artist",
      album: "new Ablum",
    },
    {
      song: "Song Two",
      ID: "2",
      artist: "Artist",
      album: "new Ablum",
    },
    {
      song: "Song Three",
      ID: "3",
      artist: "Artist",
      album: "new Ablum",
    },
    {
      song: "Song Four",
      ID: "4",
      artist: "Artist",
      album: "new Ablum",
    },
    {
      song: "Song Five",
      ID: "5",
      artist: "Artist",
      album: "new Ablum",
    },
  ];
  return (
    <body>
      <Navbar />
      <br />
      <div class="move">
        <h2>{location.state.name}</h2>
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
            {data.map((obj) => {
              return <SongInfo ID={obj.ID} playlists={[{}]} modify={false} />;
            })}
          </tbody>
        </table>
      </div>
    </body>
  );
};

export default ViewPlaylist;
