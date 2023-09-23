import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/main/Home";
import PortfolioPage from "./components/portfolio/PortfolioPage";
import Footer from "./components/Footer";
import ResumePage from "./components/resume/ResumePage";

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </div>
    <div className="Footer">
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App;
