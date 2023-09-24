import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/main/Home";
import PortfolioPage from "./components/portfolio/PortfolioPage";
import Footer from "./components/Footer";
import ResumePage from "./components/resume/ResumePage";
// import FileForm from "./components/portfolio/FileForm";
// import LastestImage from "./components/portfolio/LastestImage";

export const AppContext = createContext(null);

function App() {
  const [latestPost, setLatestPost] = useState(AppContext);

  return (
    <BrowserRouter>
    <AppContext.Provider value={{ latestPost, setLatestPost }}>
    <Navbar />
    <div className="App">
      {/* <FileForm />
      <LastestImage /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/resume" element={<ResumePage />} />
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
