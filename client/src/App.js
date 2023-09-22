import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/main/Home";
import PortfolioPage from "./components/portfolio/PortfolioPage";

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
