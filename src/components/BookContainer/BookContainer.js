import React from "react";
import BookCard from "../BookCard/BookCard";
import PropTypes from 'prop-types';
import "./BookContainer.css";

const BookContainer = ({ allBooks }) => {
  const bookCards = allBooks.map((book) => {
    return (
      <BookCard
        key={book.id}
        id={book.id}
        isbn={book.isbn}
        title={book.title}
        bookImage={book.book_image}
        author={book.author}
        recommendedBy={book.recommended_by}
      />
    );
  });

  return <section className="book-container">{bookCards}</section>;
};

export default BookContainer;

BookContainer.propTypes = {
  allBooks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    isbn: PropTypes.string,
    title: PropTypes.string,
    bookImage: PropTypes.string,
    author: PropTypes.string,
    recommendedBy: PropTypes.string
  }))
}
