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
    <body>
        <div class="header">
          <div>
            <h1>SPooT IffY</h1>
          </div>
        </div>
    
          <div class="body">
            <form>
                <label for="username">Username:</label>
              <br />
                <input type="text" id="username" name="username" />
              <br />
                <label for="pwd">Password:</label>
              <br />
                <input type="password" id="pwd" name="pwd" />
            </form>{" "}
            <br />
            <button>Log In</button>
            <br />
            <br />
            <button>Register</button>
          </div>                   
    </body>    
  );
};

export default Login;
