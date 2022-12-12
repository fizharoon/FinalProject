import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import Navbar from "../../Components/Navbar";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
const Dashboard = () => {
  const [user, setUser] = useState(0);
  useEffect(() => {}, []);
  let data = [
    {
      name: "name One",
      ID: "1",
    },
    {
      name: "name Two",
      ID: "2",
    },
    {
      name: "name Three",
      ID: "3",
    },
    {
      name: "name Four",
      ID: "4",
    },
    {
      name: "name Five",
      ID: "5",
    },
  ];
  return (
    <body>
      <Navbar />
      <div class="main">
        <h2>My Playlists</h2>

        {data.map((obj) => {
          return <button class="playlist">{obj.name}</button>;
        })}
      </div>
    </body>
  );
};

export default Dashboard;
