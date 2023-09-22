import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/main/Navbar";
import Home from "./components/main/Home";

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
