import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import { useNavigate } from "react-router-dom";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
const PlayList = (props) => {
  const [data, setData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://cse-106-final-zuwe-master-vpc737kgfa-wm.a.run.app/UserHome/GetPlaylistName/${props.ID}`
      )
      .then((res) => {
        setData(res.data);
      });
  }, []);
  const unlikePlaylist = (ID) => {
    axios
      .post(
        `https://cse-106-final-zuwe-master-vpc737kgfa-wm.a.run.app/UserHome/UnlikePlaylist`,
        {
          playlist_ID: props.ID,
        }
      )
      .then((res) => {
        console.log("YEET");
        console.log(res);
      });

    navigate("/Dashboard");
  };
  return (
    <div style={{ flex: 1, margin: 20 }}>
      <button
        class="playlist"
        onClick={() =>
          navigate("/ViewPlaylist", {
            state: { name: data, ID: props.ID, check: false },
          })
        }
      >
        <img src="https://picsum.photos/id/39/200/300"></img>
        {data}
      </button>
      <button
        style={{
          backgroundColor: "white",
          color: "black",
          alignContent: "center",
          marginLeft: "50%",
        }}
        onClick={() => unlikePlaylist()}
      >
        unLike
      </button>
    </div>
  );
};

// };

export default PlayList;
