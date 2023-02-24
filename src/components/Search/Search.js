import React,{ Component } from "react";
import { Link } from 'react-router-dom'

class Search extends Component {
    constructor(){
        super()
        this.state={
            top100: '',
            recomended: ''
        }
    }


    componentDidMount () {
  
        getAPIData(`movies/${this.props.movieId}`)
          .then(data => {
            this.setState({ top100: data })
        })
              
    }

    render(){
        return(
            <container>
                <form>
                    <label htmlFor='searchTop'>Search Top 100</label>
                    <input
                        type='text'
                        id='searchTop'
                        placeholder='Enter Title Here'

                    />
                    <lable htmlFor='recomended'>Recomended By</lable>
                    <input
                        type='text'
                        id='recomended'
                        placeholder='Enter Title Here'
                        // onChange={}
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