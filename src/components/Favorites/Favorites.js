import React, { Component } from "react";
import BookContainer from "../BookContainer/BookContainer"
import { apiCalls } from "../apiCalls";
import ErrorModal from '../ErrorHandle/ErrorModal';
import { cleanBookData } from '../utilities'
import './Favorites.css';

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      error: ''
    }
  }

  componentDidMount = () => {
    apiCalls.getAllFavorites()
      .then(booksData => {
        const cleanedFavorites = booksData.map(book => cleanBookData(book))
        this.setState({ favorites: cleanedFavorites })
      })
      // Does this do anything?
      .catch(error => this.setState({ error: error.message }))
  }

  render() {
    const errorModal = this.state.error ? <ErrorModal message={this.state.error} /> : null
    return (
      <>
        {!this.state.favorites.length && <h2 className="empty-favorites-msg">You haven't added any favorites yet -- get to it!</h2>}
          <BookContainer allBooks={this.state.favorites} />
          {errorModal}
      </>
    );
  }
}

export default Favorites;
