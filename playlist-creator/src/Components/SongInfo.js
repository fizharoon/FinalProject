import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
const SongInfo = (props) => {
  const [song, setSong] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://cse-106-final-zuwe-master-vpc737kgfa-wm.a.run.app/GetSongInfo/${props.ID}`
      )
      .then((res) => {
        setSong(res.data);
      });
  }, []);
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const addSong = (playlist_ID) => {
    axios
      .post(`http://127.0.0.1:5000/UserHome/ModifyPlaylist/AddSong`, {
        playlist_ID: playlist_ID,
        song_ID: props.ID,
      })
      .then((res) => {
        console.log("YEET");
        console.log(res);
      });
    closeModal();
  };
  return (
    <tr>
      <td>{song.name}</td>
      <td>{song.artist}</td>
      <td>{song.album}</td>
      {props.modify ? (
        <td>
          <button class="add" onClick={() => openModal()}>
            <i class="fa fa-fw fa-plus"></i>
          </button>
        </td>
      ) : null}
      {props.modify ? (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <p>Which Playlist?</p>
          {props.playlists.map((obj) => {
            return (
              <div style={{ display: "flex" }}>
                <p>{obj.name}</p>
                <button onClick={() => addSong(obj.ID)}>Choose</button>
              </div>
            );
          })}
        </Modal>
      ) : null}
    </tr>
  );
};

// export default RecSongs;
// import "./styles.css";

// const Song = () => {
//   const [user, setUser] = useState(0);
//   useEffect(() => { }, []);

//   return (
//     <main className="dashboard">
//       <h1>Songs</h1>
//       <body>
//         <h2>Select songs</h2>
//         <input type="checkbox" id="song" name="song1" value="song1" />
//         <label for="song">song </label><br />
//         <div id="root"></div>
//         <button id="btn">Add </button>
//         <button id="btn">Play </button>
//       </body>
//     </main>
//   );

// };

export default SongInfo;
