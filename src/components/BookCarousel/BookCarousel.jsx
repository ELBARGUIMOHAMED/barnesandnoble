// BookCarousel.jsx
import React from 'react';
import Slider from 'react-slick';

const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={`full_${i}`} style={{ color: '#f5a623' }}>
        ★
      </span>
    );
  }

  if (halfStar) {
    stars.push(
      <span key="half" style={{ color: '#f5a623' }}>
        ☆
      </span>
    );
  }

  while (stars.length < 5) {
    stars.push(
      <span key={`empty_${stars.length}`} style={{ color: '#ccc' }}>
        ☆
      </span>
    );
  }

  return <div>{stars}</div>;
};

const BookCarousel = ({ books }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true, // Ensures left and right arrows are displayed
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {books.map(book => (
        <div key={book.id} style={{ padding: '0 10px' }}>
          <div style={{ cursor: 'pointer' }}>
            <img
              src={book.cover}
              alt={book.title}
              style={{
                width: 156,
                height: 239,
                objectFit: 'cover',
                borderRadius: 8
              }}
            />
            <h4 style={{
              margin: '10px 0 5px',
              fontWeight: 'bold',
              fontSize: '1rem'
            }}>
              {book.title.length > 40 ? book.title.slice(0, 37) + '...' : book.title}
            </h4>
            <p style={{
              color: '#2a7f62',
              margin: '0 0 5px',
              fontWeight: '500',
              cursor: 'pointer'
            }}>
              by {book.author}
            </p>
            <StarRating rating={book.rating || 4.5} />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default BookCarousel;