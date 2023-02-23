import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <div>
      <h1>ShelfLife</h1>
      <div className="book-icon-container">
        <img src="books.png" alt="stacked Books" className="book-icon" />
        <article className="welcome-box">
          <p>
            Welcome to Shelf Life! Take a look at our selection of
            recommendation, and click the "Learn More" button to learn more
            about the book and store your favorites!{" "}
          </p>
        </article>
      </div>
    </div>
  );
  
    
}
export default Nav;