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
                    <lable htmlFor='recomended'>Recomended</lable>
                    <input
                        type='text'
                        id='recomended'
                        placeholder='Enter Title Here'
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