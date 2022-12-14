import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    axios
      .post(`https://cse-106-final-zuwe-master-vpc737kgfa-wm.a.run.app/logout`)
      .then((res) => {
        navigate("/");
      });
  };
  return (
    <div class="sidebar">
      <a onClick={() => navigate("/Dashboard")}>
        <i class="fa fa-fw fa-home"></i> Home
      </a>
      <a onClick={() => navigate("/CreatePlaylist")}>
        <i class="fa fa-fw fa-plus-square"></i> Create Playlist
      </a>
      <a onClick={() => navigate("/ViewLikedPlaylists")}>
        <i class="fa fa-fw fa-plus-view"></i> Liked Playlists
      </a>
      <a onClick={() => navigate("/ViewAllPlaylists")}>
        <i class="fa fa-fw fa-plus-view"></i> View Playlists
      </a>
      <a onClick={() => logout()}>
        Logout <i class="fa fa-fw fa-sign-out"></i>
      </a>
    </div>
  );
};

export default Navbar;
