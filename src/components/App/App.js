import './App.css'
import React, { Component } from 'react';
import BookContainer from '../BookContainer/BookContainer'


class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <>
        <h1>book club</h1>
        <BookContainer />
      </>
    )
  }
}

export default App;