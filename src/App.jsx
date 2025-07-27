import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Pages
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import BooksPage from "./components/Books/BooksPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app w-full">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/books" element={<BooksPage />} />
          {/* Category route with param */}
          <Route path="/category/:categoryName" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;