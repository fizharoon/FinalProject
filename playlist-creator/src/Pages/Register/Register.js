import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {}, []);

  const checkUser = (event) => {
    console.log("YEET");
    event.preventDefault();
    console.log(location.state.genres);
    console.log(location.state.artists);

    axios
      .post(
        `https://cse-106-final-zuwe-master-vpc737kgfa-wm.a.run.app/register`,
        {
          username: username,
          password: password,
          genres: location.state.genres,
          artists: location.state.artists,
        }
      )
      .then((res) => {
        console.log("YEET");
        console.log(res);
        if (res.status == 200) {
          navigate("/Songs");
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
          <label for="username">Username:</label>
          <br />
          <input
            class="logininput"
            id="username"
            name="username"
            onChange={(event) => setUsername(event.target.value)}
          />
          <br />
          <br />
          <label for="pwd">Password:</label>
          <br />
          <input
            class="logininput"
            type="password"
            id="pwd"
            name="pwd"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button class="newButton" type="submit">
            Create Account
          </button>
        </form>
        <br />

        <br />
      </div>
    </body>
  );
};

export default Register;
