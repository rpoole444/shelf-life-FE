import './App.css'
import React, { Component } from 'react';
import Favorites from '../Favorites/Favorites';
import BookContainer from '../BookContainer/BookContainer';
import BookDetails from '../BookDetails/BookDetails';
import Nav from'../Nav/Nav';
import Error404 from '../ErrorHandle/Error404';
import ErrorModal from '../ErrorHandle/ErrorModel';
import { apiCalls } from '../apiCalls'
import { cleanBookData } from '../utilities';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      error: ''
    }
  }
  
  componentDidMount = () => {
    apiCalls.getAllBooks()
      .then(booksData => {
        const cleanedBooksData = booksData.map(book => cleanBookData(book));
        this.setState({ books: cleanedBooksData})
      }) 
      .catch(error => this.setState({ error: error.message}))
  }

  render() {
    const errorModal = this.state.error ? <ErrorModal message={this.state.error}/> : null
    return (
        <section className='App'>
          <Switch>
            <Route exact path='/'>
              <Nav />
              <BookContainer allBooks={this.state.books}/>
            </Route>
            <Route exact path='/favorites' render={({ match }) => {
              return [<Nav location="favorites" key={match + '-nav'}/>, <Favorites key={match + '-book-details'}/>]
            }} />
            <Route exact path='/:isbn/selectedBook' render={({ match }) => {
              return [<Nav key={match.params.isbn + '-nav'} />, <BookDetails isbn={match.params.isbn} key={match.params.isbn + '-book-details'} />]
            }} />
            <Route>
              <Nav />
              <Error404 />
            </Route>
          </Switch>
          {errorModal}
        </section>
    )
  }
}

export default App;