import React, { Component } from "react";
import ErrorModal from "../ErrorHandle/ErrorModel";
import { apiCalls } from "../apiCalls";
import { cleanBookData, trimBookData } from "../utilities";
import Error404 from '../ErrorHandle/Error404'
import ErrorModal from '../ErrorHandle/ErrorModel'
import './BookDetails.css'
import PropTypes from 'prop-types';

class BookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBook: {},
      error: "",
    };
  }

  componentDidMount = () => {
    apiCalls
      .getSingleBook(this.props.isbn)
      .then((bookData) => {
        const cleanedBookData = cleanBookData(bookData[0]);
        this.setState({ selectedBook: cleanedBookData });
      })
      .catch((error) => this.setState({ error: error.message }));
  };

  handleDelete = () => {
    Promise.all([
      apiCalls.deleteFromFavorites(this.state.selectedBook.isbn),
      apiCalls.updateFavStatus(this.state.selectedBook),
    ])
      .then(() => {
        return apiCalls.getSingleBook(this.props.isbn).then((data) => {
          const cleanedBookData = cleanBookData(data[0]);
          this.setState({ selectedBook: cleanedBookData });
        });
      })
      .catch((error) => this.setState({ error: error.message }));
  };

  handleAdd = () => {
    Promise.all([
      apiCalls.addBookToFavorites(trimBookData(this.state.selectedBook)),
      apiCalls.updateFavStatus(this.state.selectedBook),
    ])
      .then(() => {
        return apiCalls.getSingleBook(this.props.isbn).then((data) => {
          const cleanedBookData = cleanBookData(data[0]);
          this.setState({ selectedBook: cleanedBookData });
        });
      })
      .catch((error) => this.setState({ error: error.message }));
  };

  determineButton = () => {
    if (this.state.selectedBook.isFavorited === "true") {
      return (
        <button className="unfavorite-button" onClick={this.handleDelete}>
          Remove from Favorites
        </button>
      );
    } else {
      return (
        <button className="favorite-button" onClick={this.handleAdd}>
          Add to Favorites
        </button>
      );
    }
  };

  render() {
    const {title, description, amazon_link, book_image, recommended_by, author} = this.state.selectedBook;
    const errorModal = this.state.error ? <ErrorModal message={this.state.error}/> : null
    return (
      <section className="book-details">
        <img className="book-img" src={book_image} alt="book" />
          <div className="book-details-text-container">
            <div className="book-text-div">
            <h2 className="selected-title">{title}</h2>
            <p className="selected-author">Written by: {author}</p>
            <p className="selected-description">{description}</p>
            <p className="selected-recommender">Recommended by: {recommended_by}</p>
          </div>
          <div className="button-container">
            {this.determineButton()}
            <a href={amazon_link} className="amazon-store-link" target="_blank" rel="noopener noreferrer">Buy Book</a>
          </div>
        </div>
        {errorModal}
      </section>
    )
  }
};
export default BookDetails;

BookDetails.propTypes = {
  isbn: PropTypes.string
}
