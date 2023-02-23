import React from "react";
import BookCard from "../BookCard/BookCard";
import "./BookContainer.css";

const BookContainer = ({ allBooks }) => {
  const bookCards = allBooks.map((book) => {
    console.log(book.recommended_by);
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
