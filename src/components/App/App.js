import './App.css'
import React, { Component } from 'react';
import Favorites from '../Favorites/Favorites';
import BookContainer from '../BookContainer/BookContainer';
import BookDetails from '../BookDetails/BookDetails';
import Nav from'../Nav/Nav';
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
  }

  render() {
    return (
      <>
        <section className='App'>
          <Nav />
          <Switch>
            <Route exact path='/'>
              <BookContainer allBooks={this.state.books}/>
            </Route>
            <Route exact path='/favorites' render={() => {
              return <Favorites />
            }} />
            <Route exact path='/:id' render={({ match }) => {
              return <BookDetails id={match.params.id} />
            }} />
          </Switch>
        </section>
      </>
    )
  }
}

export default App;