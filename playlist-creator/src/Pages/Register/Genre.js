import React, { useEffect, useState } from "react";
import "./styles.css";

const PreRegister = () => {
  const [user, setUser] = useState(0);
  useEffect(() => { }, []);

  return (
    <main className="dashboard">
      <h1>PreRegister</h1>
      <body>
        <h2>Select genres</h2>
        <input type="checkbox" id="genre" name="acoustic" value="acoustic" />
        <label for="genre">acoustic </label><br />
        <div id="root"></div>
        <button id="btn">Submit</button>
      </body>
    </main>
  );

};

export default PreRegister;
