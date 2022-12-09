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
    <main className="dashboard">
      <h1>Register</h1>
    </main>
  );
};

export default Register;
