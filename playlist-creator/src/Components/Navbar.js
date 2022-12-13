import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div class="sidebar">
      <a onClick={() => navigate("/Dashboard")}>
        <i class="fa fa-fw fa-home"></i> Home
      </a>
      <a onClick={() => navigate("/CreatePlaylist")}>
        <i class="fa fa-fw fa-plus-square"></i> Create Playlist
      </a>
      <a onClick={() => navigate("/")}>
        Logout <i class="fa fa-fw fa-sign-out"></i>
      </a>
    </div>
  );
};

export default Navbar;
