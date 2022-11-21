import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import PreRegister from "./Pages/Register/Artist&Genre";
import Register from "./Pages/Register/Register";
import CreatePlaylist from "./Pages/CreatePlaylist/CreatePlaylist";
import ViewPlaylist from "./Pages/ViewPlaylist/ViewPlaylist";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/PreRegister" element={<PreRegister />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/CreatePlaylist" element={<CreatePlaylist />} />
        <Route path="/ViewPlaylist" element={<ViewPlaylist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
