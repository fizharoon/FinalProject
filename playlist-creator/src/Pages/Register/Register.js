import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {}, []);

  const checkUser = (event) => {
    console.log("YEET");
    event.preventDefault();
    axios
      .post(`http://127.0.0.1:5000/register`, {
        username: username,
        password: password,
      })

      .then((res) => {
        console.log("YEET");
        console.log(res);
        if (res.status == 200) {
          navigate("/");
        }
      });
  };
  return (
    <body>
      <div class="header">
        <div>
          <h1>Register</h1>
        </div>
      </div>

      <div class="body">
        <form onSubmit={checkUser}>
          <br />
          <label for="username">Username:</label>
          <br />
          <br />
          <input
            type="username"
            id="username"
            name="username"
            onChange={(event) => setUsername(event.target.value)}
          />
          <br />
          <br />
          <br />
          <label for="pwd">Password:</label>
          <br />
          <br />
          <input
            type="password"
            id="pwd"
            name="pwd"
            onChange={(event) => setPassword(event.target.value)}
          />
           <br />
           <br />
           <br />
          <button type="submit">Register</button>
        </form>
        <br />

        <br />
      </div>
    </body>
  );
};

export default Register;
