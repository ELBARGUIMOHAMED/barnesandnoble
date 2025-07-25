import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import BooksPage from "./components/Books/BooksPage"; // ✅ page dyal books
import { Navbar } from "./components/Navbar/Navbar";

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
          <Route path="/fiction" element={<Home />} />
          <Route path="/nonfiction" element={<Home />} />
          <Route path="/ebooks" element={<Home />} />
          <Route path="/audiobooks" element={<Home />} />
          <Route path="/teens-ya" element={<Home />} />
          <Route path="/kids" element={<Home />} />
          <Route path="/toys-games" element={<Home />} />
          <Route path="/stationery-gifts" element={<Home />} />
          <Route path="/music-movies" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
