import React, { Component } from "react";
import { apiCalls } from '../apiCalls';
import { cleanBookData } from "../utilities";
import './BookDetails.css'

class BookDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBook: {},
            error: ''
        }
    }

    componentDidMount = () => {
        apiCalls.getSingleBook(this.props.id)
            .then(bookData => {
                const cleanedBookData = cleanBookData(bookData[0])
                this.setState({selectedBook: cleanedBookData })
            })
            .catch(error => this.setState({ error: error.message}))
    }

    render() {
        const { id, isbn, title, description, amazon_link, book_image, recommended_by, author } = this.state.selectedBook
        console.log('selectedbookk', this.state.selectedBook)
        return (
            <section className="book-details">
                <img className='book-img' src={book_image}/>
                <div className="book-details-text-container">
                    <h2 className="selected-title">{title}</h2>
                    <p className="selected-author">Written by: {author}</p>
                    <p className="selected-description">{description}</p>
                    <p>Recommended by: {recommended_by}</p>
                    <div className="button-container">
                        <button className="favorite-button">Add to Favorites</button>
                        <a href={amazon_link} className='amazon-store-link' target="_blank" rel="noopener noreferrer">Buy Book</a>
                    </div>
                </div>
            </section>
        )
    }
}
export default BookDetails;