import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(username);
  console.log(password);
  const checkUser = (event) => {
    console.log("YEET");
    event.preventDefault();
    console.log(username);
    console.log(password);
    axios
      .post(`http://127.0.0.1:5000/login`, {
        username: username,
        password: password,
      })

      .then((res) => {
        console.log("YEET");
        console.log(res);
        if (res.data.success == true) {
          setUsername("");
          setPassword("");
          navigate("/Dashboard");
        }
      });
  };

  useEffect(() => {}, []);

  return (
    <body>
      <div class="header">
        <div>
          <h1>SPooT IffY</h1>
        </div>
      </div>

      <div class="body">
        <form onSubmit={checkUser}>
          <label for="username">Username:</label>
          <br />
          <input
            value={username}
            type="text"
            id="username"
            name="username"
            onChange={(event) => setUsername(event.target.value)}
          />
          <br />
          <label for="pwd">Password:</label>
          <input
            value={password}
            type="password"
            id="pwd"
            name="pwd"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Log In</button>
        </form>{" "}
        <br />
        <br />
        <br />
        {/* <button>Register</button> */}
      </div>
    </body>
  );
};

export default Login;
