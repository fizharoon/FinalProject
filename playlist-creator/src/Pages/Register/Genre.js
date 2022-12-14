import React, { useEffect, useState } from "react";
import "./styles.css";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
const Genres = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://cse-106-final-zuwe-master-vpc737kgfa-wm.a.run.app/SetUp/GetGenres`
      )
      .then((res) => {
        console.log(res.data);
        console.log(Object.values(res.data));
        setGenres(Object.values(res.data));
      });
  }, []);
  const navigate = useNavigate();

  const submitGenres = () => {
    axios
      .post(
        `https://cse-106-final-zuwe-master-vpc737kgfa-wm.a.run.app/SetUp/SetGenres`,
        {
          selected_genres: selectedGenres,
        }
      )
      .then((res) => {
        console.log("YEET");
        console.log(res);
        navigate("/Artists", { state: { genres: selectedGenres } });
      });
  };

  const updateArr = (e) => {
    e.preventDefault();
    console.log(e.target.checked);
    if (e.target.checked) {
      let temp = selectedGenres;
      temp.push(e.target.value);
      setSelectedGenres(temp);
    } else {
      let temp = selectedGenres;
      var index = temp.indexOf(e.target.value);
      temp.splice(index, 1);
      setSelectedGenres(temp);
    }
  };
  return (
    <main className="dashboard">
      <div
        style={{ display: "flex", flexDirection: "column", marginBottom: 300 }}
      >
        <h1>Select Genres (Pick 3)</h1>
        <button onClick={() => submitGenres()}>Next</button>
        <div style={{ marginLeft: "25%" }}>
          <ul class="checkbox-grid">
            {genres.map((obj) => {
              return (
                <li class="check">
                  <label class="genres" for="text1">
                    {obj}
                  </label>
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

export default Genres;
