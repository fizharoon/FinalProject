import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
const Register = () => {
  const [user, setUser] = useState(0);
  useEffect(() => {}, []);

  const checkUser = () => {
    axios
      .post(`http://127.0.0.1:5000/register`, {
        username: "Sean",
        password: "Testing",
      })

      .then((res) => {
        console.log("YEET");
        console.log(res);
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
        <form>
            <label for="name">Name:</label><br/>
            <input type="text" /> <br/><br/>
            <label for="username">Username:</label><br/>
            <input type="text" id="username" name="username"/><br/><br/>
            <label for="pwd">Password:</label><br/>
            <input type="password" id="pwd" name="pwd"/>
        </form> <br/>
        <button>Create Account</button><br/>
    </div>
 

</body>
  );
};

export default Register;
