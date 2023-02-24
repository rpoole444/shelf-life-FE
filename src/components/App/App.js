import './App.css'
import React, { Component } from 'react';
import Favorites from '../Favorites/Favorites';
import BookContainer from '../BookContainer/BookContainer';
import BookDetails from '../BookDetails/BookDetails';
import Nav from'../Nav/Nav';
import Error404 from '../ErrorHandle/Error404';
import ErrorModal from '../ErrorHandle/ErrorModal';
import { apiCalls } from '../apiCalls'
import { cleanBookData } from '../utilities';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      error: ''
    }
  }

  componentDidMount = () => {
    // Love how you have this separated out into its own apiCalls file
    apiCalls.getAllBooks()
      .then(booksData => {
        const cleanedBooksData = booksData.map(book => cleanBookData(book));
        this.setState({ books: cleanedBooksData})
      })
      .catch(error => this.setState({ error: error.message}))
  }

  render() {
    const errorModal = this.state.error ? <ErrorModal message={this.state.error}/> : null

    // This route syntax is new to me. Do they really want you to pass in an array of components? I would have expected them to just be nested in it like this
    // <Route exact path='/favorites' render={({ match })>
    //   <Nav location="favorites" key={match + '-nav'}/>
    //   <Favorites key={match + '-book-details'}/>
    // </Route>

    // You could also bring the nav up to a higher level (between the Switch and the Routes), or use a higher level component, so that you don't have to create like 6 navs.
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
    );
  }
}

export default App;
