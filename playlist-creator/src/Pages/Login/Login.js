import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
const Login = () => {
  const checkUser = () => {
    axios
      .post(`http://127.0.0.1:5000/login`, {
        username: "Sean",
        password: "Testing",
      })

      .then((res) => {
        console.log("YEET");
        console.log(res);
      });
  };
  const [user, setUser] = useState(0);

  useEffect(() => {}, []);

  return (
    <main className="dashboard">
      <h1>Login</h1>
    </main>
  );
};

export default Login;
