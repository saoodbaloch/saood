import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"; 
import About from "./pages/About"; 
import Portfolio from "./pages/Portfolio"; 
import Resume from "./pages/Resume"; 

import "./App.css";
import "./output.css";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1111] flex flex-col"> {/* ✅ Added wrapper */}
        <Navbar />
        <main className="flex-grow"> {/* ✅ Ensure main content takes remaining space */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
             <Route path="/portfolio" element={<Portfolio />} />
             <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;