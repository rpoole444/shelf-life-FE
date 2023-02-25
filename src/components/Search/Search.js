import React,{ Component } from "react";
import { Link } from 'react-router-dom'

class Search extends Component {
    constructor(){
        super()
        this.state={
            top100: [],
            SearchTopValue: '',
            filterBooks: []

        }
    }


    componentDidMount () {
        getTop100()
          .then(data => {
            this.setState({ top100: data })
        })   
    }


    searchTopBar = (event) => {
        this.setState({SearchTopValue: event.target.value},() => {
            this.filterBooks(this.state.SearchTopValue)
          })
    }


    filterbooks = (input) => {
        const searchedbooks = this.state.top100.filter(book => {
          if (input) {
            return (
              book.title.toUperCase().includes(input));
          } else {
            return book;
          }
        });
        this.setState({ top100: searchedbooks });
      };

    render(){
        return(
            <container>
                <form>
                    <label htmlFor='searchTop'>Search Top 100</label>
                    <input
                        type='text'
                        id='searchTop'
                        placeholder='Enter Title Here'
                        value={this.state.SearchTopValue}
                        onChange={event => this.state.SearchTopValue(event)}
                    />
                    <lable htmlFor='recomended'>Recomended By</lable>
                    <input
                        type='text'
                        id='recomended'
                        placeholder='Enter Title Here'
                        value={this.state.searchRecomendedValue}
                        onChange={event => this.state.searchRecomendedValue(event)}
                    />
                    <button>Add Book</button>
                </form>
                <div>
                    <Link className="landing-page-link" to="/">
                        <h1>Return Home »</h1>
                    </Link>
                </div>
                
            </container>
        )
    }



}
export default Search