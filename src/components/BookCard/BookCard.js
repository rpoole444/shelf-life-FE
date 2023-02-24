import React from "react";
import { Link } from "react-router-dom";
import "./BookCard.css";

const BookCard = ({ title, author, bookImage, isbn, id, recommendedBy }) => {
  return (
    <section className="book-card">
      <img className="book-cover" src={bookImage} alt={`${title} cover`} />
      <div className="book-side-panel">
        <div className="book-side-panel-banner">
          <h2 className="book-title">{title}</h2>
          <p className="book-author">{author}</p>
          <p>Recommended By: {recommendedBy}</p>
        </div>
        <Link to={`/${isbn}/selectedBook`} className="button-56">Learn More</Link>
      </div>
    </section>
  );
};

export default BookCard;
