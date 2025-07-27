import React from "react";

const BookCard = ({ title, author, cover, description }) => {
  return (
    <div
      style={{
        width: 220,
        border: "1px solid #ddd",
        borderRadius: 10,
        padding: 15,
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: 420,
      }}
    >
      <img
        src={cover}
        alt={title}
        style={{ width: "100%", height: 250, objectFit: "cover", borderRadius: 8 }}
      />
      <h3 style={{ marginTop: 10, fontSize: "1.1rem" }}>{title}</h3>
      <p
        style={{
          color: "#555",
          fontSize: "0.85rem",
          fontStyle: "italic",
          flexGrow: 1,
          marginTop: 8,
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical",
        }}
        title={description}
      >
        {description}
      </p>
      <p style={{ color: "#777", fontSize: "0.9rem", marginTop: 10, textAlign: "right" }}>
        — {author}
      </p>
    </div>
  );
};

export default BookCard;
