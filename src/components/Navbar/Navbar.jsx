import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import custom CSS file

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Search Query:", { category, query: searchQuery.trim() });
      // Add your search logic here (e.g., navigate to a search results page or filter content)
      setSearchQuery(""); // Clear input after search
    }
  };

  return (
    <nav className="navbar">
      {/* Pick Up in Store Banner */}
      <div className="banner">
        PICK UP IN STORE: READY IN TWO HOURS
      </div>

      {/* Main Navigation */}
      <div className="nav-container">
        {/* Top Links */}
        <div className="top-links">
          <div className="left-links">
            <a href="#" className="nav-link">Stores & Events</a>
            <a href="#" className="nav-link">Membership</a>
            <a href="#" className="nav-link">B&N Reads Blog</a>
            <a href="#" className="nav-link">Podcast</a>
            <a href="#" className="nav-link">Sweepstakes</a>
            <a href="#" className="nav-link">Gift Cards</a>
          </div>
          <div className="right-links">
            <a href="#" className="nav-link">My Account</a>
            <a href="#" className="nav-link">Wishlist</a>
            <div className="cart-icon">
              <a href="#" className="nav-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M7 7v10a2 2 0 002 2h6a2 2 0 002-2V7m-4 4h.01" />
                </svg>
                <span className="cart-count">1</span>
              </a>
            </div>
          </div>
        </div>

        {/* Logo and Search */}
        <div className="logo-search">
          <span className="logo">BARNES & NOBLE</span>
          <form onSubmit={handleSearch} className="search-bar">
            <select
              className="category-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Books">Books</option>
              <option value="eBooks">eBooks</option>
            </select>
            <input
              type="text"
              placeholder="Search by Title, Author, Keyword or ISBN"
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 4.65 7.5 7.5 0 1116.65 16.65z" />
              </svg>
            </button>
          </form>
        </div>

        {/* Categories */}
        <div className="categories">
          <Link to="/books" className="category-link">Books</Link>
          <span className="separator">||</span>
          <Link to="/fiction" className="category-link">Fiction</Link>
          <span className="separator">|</span>
          <Link to="/nonfiction" className="category-link">Nonfiction</Link>
          <span className="separator">|</span>
          <Link to="/ebooks" className="category-link">eBooks</Link>
          <span className="separator">|</span>
          <Link to="/audiobooks" className="category-link">Audiobooks</Link>
          <span className="separator">|</span>
          <Link to="/teens-ya" className="category-link">Teens & YA</Link>
          <span className="separator">|</span>
          <Link to="/kids" className="category-link">Kids</Link>
          <span className="separator">|</span>
          <Link to="/toys-games" className="category-link">Toys & Games</Link>
          <span className="separator">|</span>
          <Link to="/stationery-gifts" className="category-link">Stationery & Gifts</Link>
          <span className="separator">|</span>
          <Link to="/music-movies" className="category-link">Music & Movies</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;