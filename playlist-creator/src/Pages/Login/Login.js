import React, { useEffect, useState } from "react";
import "./styles.css";

const Login = () => {
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
