import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css';
import logo from '../books.png'

const Nav = ({ location }) => {
  let navLink;
  if (location === 'favorites') {
    navLink = <Link className="landing-page-link" to="/"><h1>Return Home »</h1></Link>
  } else {
    navLink = <Link className="favorites-link" to="/favorites"><h1>Your Favorites »</h1></Link>
  }
  return (
    <nav className="navbar">
      <Link className="logo-link" to="/">
        <img className="logo" src={logo} alt="Book club logo"/>
      </Link>
        <h1 className='title'>Shelf Life</h1>
      {navLink}
    </nav>
  );
}
  

export default Nav;