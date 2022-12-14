import React, { useEffect, useState } from "react";
import "./styles.css";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import SongInfo from "../../Components/SongInfo";
const Songs = () => {
  const [data, setData] = useState([0, 1, 2, 3]);
  const [returnArr, setArr] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://cse-106-final-zuwe-master-vpc737kgfa-wm.a.run.app/SetUp/GetSongs`
      )
      .then((res) => {
        console.log(res.data);
        setData(Object.values(res.data));
        let temp = {};
        for (var i = 0; i < Object.values(res.data).length; i++) {
          temp[i] = 0;
        }
        console.log(temp);

        setArr(temp);
      });
  }, []);

  const LikeSongs = () => {
    console.log(returnArr);
    axios
      .post(
        `https://cse-106-final-zuwe-master-vpc737kgfa-wm.a.run.app/SetUp/SetSongs`,
        {
          songs: returnArr,
        }
      )
      .then((res) => {
        axios
          .post(
            `https://cse-106-final-zuwe-master-vpc737kgfa-wm.a.run.app/SetUp/TrainModel`
          )
          .then((res) => {
            console.log("YEET");
            console.log(res);
            if (res.status == 200) {
              navigate("/Dashboard");
            }
          });
      });
  };

  const UpdateArr = (e, index) => {
    e.preventDefault();
    console.log(e.target.checked);
    if (e.target.checked) {
      let temp = returnArr;
      temp[index] = 1;
      setArr(temp);
    } else if ((e.target.checked = false)) {
      let temp = returnArr;
      temp[index] = 0;
      setArr(temp);
    }
  };
  return (
    <main className="dashboard">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>PickSongs</h1>
      </div>
      <div class="move">
        <table id="RecSongsTable">
          <thead>
            <th>Song Name</th>
            <th></th>
          </thead>
          <tbody>
            {data.map((obj, index) => {
              return (
                <tr>
                  <td>{obj}</td>
                  <td>
                    <input
                      type="checkbox"
                      onChange={(e) => UpdateArr(e, index)}
                      name="text1"
                      value={obj}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button onClick={() => LikeSongs()}>Submit</button>
    </main>
  );
};

export default Songs;
