import React, { Component } from "react";
import { apiCalls } from '../apiCalls';
import { cleanBookData, trimBookData } from "../utilities";
import './BookDetails.css'

// test me
class BookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBook: {},
      error: ''
    }
  }

  componentDidMount = () => {
    apiCalls.getSingleBook(this.props.isbn)
      .then(bookData => {
        // Using a 0 index on the data is prone to breaking or giving you the wrong thing. If you really just want a single book, the API should return one book instead of an array with one object in it
        const cleanedBookData = cleanBookData(bookData[0])
        this.setState({ selectedBook: cleanedBookData })
      })
      // Does this error state actually get used? I don't think it does. Unless you have an error boundary. I'd use a console.error instead for your purposes.
      .catch(error => this.setState({ error: error.message }))
  }

  handleDelete = () => {
    Promise.all([
      apiCalls.deleteFromFavorites(this.state.selectedBook.isbn),
      apiCalls.updateFavStatus(this.state.selectedBook)
    ])
      .then(() => {
        return apiCalls.getSingleBook(this.props.isbn)
          .then(data => {
            // same comment here about 0 indexed arrays
            // also if you are deleting it, why are you still displaying it?
            // if you're unfavoriting it, this method name seems wrong
            const cleanedBookData = cleanBookData(data[0])
            this.setState({ selectedBook: cleanedBookData })
          })
      })
      // what does this error do
      .catch(error => this.setState({ error: error.message }))
  }

  handleAdd = () => {
    Promise.all([
      apiCalls.addBookToFavorites(trimBookData(this.state.selectedBook)),
      apiCalls.updateFavStatus(this.state.selectedBook)
    ])
      .then(() => {
        return apiCalls.getSingleBook(this.props.isbn)
          .then(data => {
            // Same comments
            const cleanedBookData = cleanBookData(data[0])
            this.setState({ selectedBook: cleanedBookData })
          })
      })
      // what does this error do
      .catch(error => this.setState({ error: error.message }))
  }

  determineButton = () => {
    const { selectedBook: { isFavorited } } = this.state;
    return Boolean(isFavorited) ? (
      <button className="unfavorite-button" onClick={this.handleDelete}>Remove from Favorites</button>
    ) : (
      <button className="favorite-button" onClick={this.handleAdd}>Add to Favorites</button>
    );
  }

  render() {
    // Remove console.logs
    // Unused props: id, isbn
    const { title, description, amazon_link, book_image, recommended_by, author } = this.state.selectedBook
    return (
      <section className="book-details">
        <img className='book-img' src={book_image} />
        <div className="book-details-text-container">
          <h2 className="selected-title">{title}</h2>
          <p className="selected-author">Written by: {author}</p>
          <p className="selected-description">{description}</p>
          <p>Recommended by: {recommended_by}</p>
          <div className="button-container">
            {this.determineButton()}
            <a href={amazon_link} className='amazon-store-link' target="_blank" rel="noopener noreferrer">Buy Book</a>
          </div>
        </div>
      </section>
    )
  }
}
export default BookDetails;
