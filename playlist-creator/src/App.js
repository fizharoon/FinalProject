import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import CreatePlaylist from "./Pages/CreatePlaylist/CreatePlaylist";
import ViewPlaylist from "./Pages/ViewPlaylist/ViewPlaylist";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Genres from "./Pages/Register/Genre";
import Artists from "./Pages/Register/Artist";
import Songs from "./Pages/Register/Songs";
import axios from "axios";
import ViewAllPlaylists from "./Pages/ViewAll/ViewAllPlaylists";
import ViewLikedPlaylists from "./Pages/ViewLikedPlaylists/ViewLikedPlaylists";

import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Artists" element={<Artists />} />
        <Route path="/Genres" element={<Genres />} />
        <Route path="/Songs" element={<Songs />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/CreatePlaylist" element={<CreatePlaylist />} />
        <Route path="/ViewAllPlaylists" element={<ViewAllPlaylists />} />
        <Route path="/ViewLikedPlaylists" element={<ViewLikedPlaylists />} />
        <Route path="/ViewPlaylist" element={<ViewPlaylist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
