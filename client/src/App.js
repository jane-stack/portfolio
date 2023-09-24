import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/main/Home";
import PortfolioPage from "./components/portfolio/PortfolioPage";
import Footer from "./components/Footer";
import ResumePage from "./components/resume/ResumePage";
import LoginPage from "./components/auth/LoginPage";

export const AppContext = createContext(null);

function App() {
  const [latestPost, setLatestPost] = useState(AppContext);

  return (
    <BrowserRouter>
    <AppContext.Provider value={{ latestPost, setLatestPost }}>
    <Navbar />
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/signin" element={<LoginPage />} />
      </Routes>
    </div>
    <div className="Footer">
      <Footer />
    </div>
    </AppContext.Provider>
    </BrowserRouter>
  )
}

export default App;
