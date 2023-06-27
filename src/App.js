import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./Home";
import './index.css';
import { LoginScreen } from "./components/loginscreen/LoginScreen";
import { Base } from "./components/base/Base";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/clientes" element={<Base/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
