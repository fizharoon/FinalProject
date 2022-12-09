import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
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
    <main className="dashboard">
      <h1>Dashboard</h1>
    </main>
  );
};

export default Dashboard;
