import React, { Component } from "react";
import BookContainer from "../BookContainer/BookContainer"
import { apiCalls } from "../apiCalls";
import { cleanBookData } from '../utilities'
import './Favorites.css';


class Favorites extends Component {
    constructor() {
        super();
        this.state = {
            favorites: [],
            error: ''
        }
    }

    componentDidMount = () => {
        apiCalls.getAllFavorites()
            .then(booksData => {
                const cleanedFavorites = booksData.map(book => cleanBookData(book))
                this.setState({ favorites: cleanedFavorites})
            })
            .catch(error => this.setState({ error: error.message}))
    }

    render() {
        return (
            <BookContainer favBooks={this.state.favorites}/>
        )
    }
}

export default Favorites;