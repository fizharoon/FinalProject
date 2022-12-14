import React, { useEffect, useState } from "react";
import "./styles.css";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
const Artists = () => {
  const [genres, setGenres] = useState([]);
  const [selectedArtists, setSelectedArtists] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://cse-106-final-zuwe-master-vpc737kgfa-wm.a.run.app/SetUp/GetArtists`
      )
      .then((res) => {
        console.log(res.data);
        console.log(res.data);
        setGenres(Object.values(res.data));
      });
  }, []);
  const navigate = useNavigate();
  const location = useLocation();
  const submitGenres = () => {
    console.log(selectedArtists);
    axios
      .post(
        `https://cse-106-final-zuwe-master-vpc737kgfa-wm.a.run.app/SetUp/SetArtists`,
        {
          selected_artists: selectedArtists,
        }
      )
      .then((res) => {
        console.log("YEET");
        console.log(res);
        navigate("/Register", {
          state: { genres: location.state.genres, artists: genres },
        });
      });
  };
  const updateArr = (e) => {
    e.preventDefault();
    console.log(e.target.checked);
    if (e.target.checked) {
      let temp = selectedArtists;
      temp.push(e.target.value);
      setSelectedArtists(temp);
    } else {
      let temp = selectedArtists;
      var index = temp.indexOf(e.target.value);
      temp.splice(index, 1);
      setSelectedArtists(temp);
    }
  };
  return (
    <main className="dashboard">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>Select Artists</h1>

        <div style={{ marginLeft: "20%" }}>
          <button onClick={() => submitGenres()}>Next</button>
          <ul class="checkbox-grid">
            {genres.map((obj) => {
              return (
                <li class="check">
                  <label for="text1">{obj}</label>
                  <input
                    class="checkb"
                    type="checkbox"
                    onChange={(e) => updateArr(e)}
                    name="text1"
                    value={obj}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Artists;
