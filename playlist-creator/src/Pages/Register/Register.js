import React, { useEffect, useState } from "react";
import "./styles.css";

const Register = () => {
  const [user, setUser] = useState(0);
  useEffect(() => {}, []);

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
