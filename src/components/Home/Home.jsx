// Home.jsx
import React, { useState, useEffect } from 'react';
import BookCarousel from '../BookCarousel/BookCarousel'; // Adjust path as needed
import homebook from '../../assets/Book.png';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError('');
      
      try {
        const response = await fetch('https://openlibrary.org/search.json?q=programming');
        
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        
        const data = await response.json();
        
        const booksData = data.docs.slice(0, 60).map(book => ({
          id: book.key,
          title: book.title,
          author: book.author_name ? book.author_name[0] : 'Unknown author',
          cover: book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : homebook,
          rating: (Math.random() * 2 + 3).toFixed(1), // Random rating between 3.0 and 5.0
        }));
        
        setBooks(booksData);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Featured Books</h2>
      {loading && <p>Loading books...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && books.length > 0 && <BookCarousel books={books} />}
    </div>
  );
};

export default Home;