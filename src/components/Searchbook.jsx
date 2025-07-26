import React, { useState, useEffect } from "react";
import "./searchbook.css";

export const Searchbook = () => {
  const [inputvalue, setInputValue] = useState("Harry Potter");
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);

  const fetchbook = (keyword) => {
    if (!keyword) return;
    setLoading(true);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyword}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.items || []);
        setLoading(false);
      })
      .catch(() => {
        setBooks([]);
        setLoading(false);
      });
  };

  // Run once on initial load with default value
  useEffect(() => {
    fetchbook("Harry Potter");
  }, []);

  const handleform = (e) => {
    e.preventDefault();
    fetchbook(inputvalue);
  };

  return (
    <div className="searchbook">
      <form onSubmit={handleform}>
        <input
          type="text"
          placeholder="Rechercher un livre..."
          value={inputvalue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Rechercher</button>
      </form>

      {loading && <p>Chargement des livres...</p>}

      <div className="booksgrid">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <h2>{book.volumeInfo.title}</h2>
            {book.volumeInfo.imageLinks?.thumbnail && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
              />
            )}
            <p>Auteur(s) : {book.volumeInfo.authors?.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
