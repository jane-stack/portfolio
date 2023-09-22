import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/main/Navbar";

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <div>
      <Routes>
        <Route />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
