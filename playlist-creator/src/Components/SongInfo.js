import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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
      .post(
        `https://cse-106-final-zuwe-master-vpc737kgfa-wm.a.run.app/UserHome/ModifyPlaylist/AddSong`,
        {
          playlist_ID: playlist_ID,
          song_ID: props.ID,
        }
      )
      .then((res) => {
        console.log("YEET");
        console.log(res);
      });

    closeModal();
  };
  const deleteSong = () => {
    console.log(props.playlist);
    axios
      .post(
        `https://cse-106-final-zuwe-master-vpc737kgfa-wm.a.run.app/UserHome/ModifyPlaylist/DeleteSong`,
        {
          playlist_ID: props.playlist,
          song_ID: props.ID,
        }
      )
      .then((res) => {
        console.log("YEET");
        console.log(res);
      });
    navigate("/Dashboard");
  };
  return (
    <tr>
      <td style={{ fontWeight: "bold" }}>{song.name}</td>
      <td style={{ fontWeight: "bold" }}>{song.artist}</td>
      <td style={{ fontWeight: "bold" }}>{song.album}</td>
      {props.modify ? (
        <td>
          <button class="add" onClick={() => openModal()}>
            <i class="fa fa-fw fa-plus"></i>
          </button>
        </td>
      ) : null}
      {props.delSong ? (
        <td>
          <button class="add" onClick={() => deleteSong()}>
            <i class="fa fa-fw fa-minus"></i>
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

export default SongInfo;
