import React from "react"
import "./Recommend.css"
import BookContainer from "../BookContainer/BookContainer"
import { apiCalls } from "../apiCalls"
import { cleanBookData } from "../utilities"
import ErrorModal from "../ErrorHandle/ErrorModel"
import Search from "../Search/Search"

class Recommend extends React.Component {
  constructor(){
    super()
    this.state = {
      top100: [],
      bookChoice: {},
      recommendedBy: "",
      error: ""
    }
  }
  componentDidMount = () => {
    apiCalls.getTop100()
      .then(booksData => {
        const cleanedTop100 = booksData.map(book => cleanBookData(data))
        this.setState({ top100: cleanedTop100 })
      })
      .catch(error => this.setState({ error: error.message }))
  }

  render() {
    console.log(top100)
    const errorModal = this.state.error ? <ErrorModal message={this.state.error} /> : null
    return (
      <>
        {!this.state.top100.length && <h2 className="empty-top100-msg">Top 100 is not available</h2>}
        <Search />
        <BookContainer top100={this.state.top100} />
        {errorModal}
      </>
    )
  }
}

export default Recommend