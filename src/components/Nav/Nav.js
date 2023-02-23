import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css';

const Nav = () => {
  return (
    <div className='nav-container'>
      <div className='title-container'> 
        <img src="books.png" alt="stacked Books" className="book-icon" />
        <h1 className='homepage-title'>ShelfLife</h1>
      </div>
      <div className="search-container">
        {/* <input className='search-input' placeholder='search'/>
        <button className='button-favorites'>To Favorites</button> */}
        <Link className='favorites-link' to="/favorites">Your Favorites</Link>
      </div>
    </div>
  );
  
    
}
export default Nav;