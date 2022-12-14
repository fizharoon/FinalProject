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
      .post(`https://cse-106-final-zuwe-master-vpc737kgfa-wm.a.run.app/login`, {
        username: username,
        password: password,
      })

      .then((res) => {
        console.log("YEET");
        console.log(res);
        if (res.data[0] == 200) {
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
          <h1>Spootify</h1>
        </div>
      </div>

      <div class="body">
        <form onSubmit={checkUser}>
          <label for="username">Username:</label>
          <br />
          <input
            class="logininput"
            value={username}
            id="pwd"
            name="username"
            onChange={(event) => setUsername(event.target.value)}
          />
          <br />
          <label for="pwd">Password:</label>
          <input
            class="logininput"
            value={password}
            type="password"
            id="pwd"
            name="pwd"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button class="newButton" type="submit">
            Log In
          </button>
        </form>
        <button class="newButton" onClick={() => navigate("/Genres")}>
          Register
        </button>
        <br />
        <br />
        <br />
        {/* <button>Register</button> */}
      </div>
    </body>
  );
};

export default Login;
