import "./App.css";
import Prova from "./components/Prova.jsx";
import Mouse from "./components/Mouse.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Fetch from "./Fetch";
import Login from './components/Login';
import Homepage from "./components/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/prova" element={<Prova />} />
          <Route path="/mouse" element={<Mouse />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
