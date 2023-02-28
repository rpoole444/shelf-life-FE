# Shelf Life

Do you have a hard time picking out the right book to read?  Well look no further, Shelf Life is here to help! This App is a book recomendation app where you are able to look at a database of books referred by the Creators and add the book to your favorites based on your interest and the recomendation!  Further more, you are able to search the New York Times top 100 best sellers and add your recommendation to the recommendation database.

## Table of Contents
  - [Setup](#setup)
  - [Technologies](#technologies)
  - [Project Spec](#project-spec)
  - [Abstract](#abstract)
  - [Learning Goals](#learning-goals)
  - [Preview](#preview)
  - [Wins + Challenges](#wins-and-challenges)
  - [Authors](#Authors)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

- Clone down this repo [here](https://github.com/rpoole444/shelf-life-FE)
- On the command line, type: $ npm intall
- On the command line, type: $ npm start
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
- The page will reload when you make changes.\
You may also see any lint errors in the console.

## Technologies
  - Javascript
  - CSS / HTML
  - VSCode
  - Git Version Control / GitHub
  - Webpack node package
  - React 
  - Router
  - Google Chrome or Web Browser of User's Choice
  - Mac OS Terminal/Command Line
  - Cypress
  - Node.js 
  - Knex
  - PostgreSQL
  
## Project Spec
[click here](https://frontend.turing.edu/projects/module-3/stretch.html)

## Abstract 

This project is designed to allow users to learn more about popular books that have been recommended from users based on the New York Times Best Sellers. As the user visits the page, a number of Book posters are displayed. The main page also includes a link to view the users favorited books. A user can click on each book poster and a new page will open with all of the book details. Once a user is on the details page, they will see a description, a picture, an option to add and remove a book from the favorites.  When the user chooses to return home, they can click a home button on the top left of the screen (our bookshelf logo). If there is an lag or errors from the server, the app also includes error handling.

We created a backend for this project to satisfy the requirements of our Stretch Tech Project. We were given an 8 day timeframe to learn and implement new technologies such as Express, Node, PostgresSQL, Knex to build a backend server and database.

## Learning Goals

- Build Backend using Express, Knex, and PostseQL
- Gain competency with React fundamentals
- Learn how to test React components & asynchronous JS
- Practice refactoring
- Create a multi-page UX using Router

## Visual of Functionality:

Scroll through the main page to view all books in the database. Each books's cover, title, Recommendation and author are visible.

![gif of navigating](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTM0ZDFmMDFjNDI5MTliYjAzZGRkYzhmMzYwOGFkZDNmMzBkMTBhNyZjdD1n/mDUCJ86L3eDfcnup3Q/giphy.gif)

Click on the 'Learn More' button next to a book cover that interests you to view a book's details. On this page a description of the book's plot is presented. The user is also given the ability to add to or remove a book from their favorites as well as the option to buy the book on Amazon. They can view all of their favorited books by clicking the "Your favorites" button at the top right of the page. Click the book club logo at the top left of the page to return to the main page.

![gif of navigating](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTRkZjg1ZTNiMTFjN2NmYWFmM2UxYTI1MTM5MjNmMzdiOWVlODA3ZCZjdD1n/yKym67WoKt3AIQ38UH/giphy.gif)

## Code Architecture <a name="codeArchitecture"></a>

The React architecture is based on three class components (App.js, BookDetails.js, Favorites.js) and five functional components (Nav.js, Error404.js, BookContainer.js, BookCard.js, ErrorModal.js). The class components hold state and are in charge of the network requests, while the functional components render information passed down as props.

## Wins & Challenges

- Successfully built a full stack app!
- Successfully created app using React framework
- Successfully implemented Router
- Successfully implemented cypress testing to check functionality
- Successfully implemented loading and error handling 

- Creating a fresh custom backend and then manipulating the data using React was a learning curve, but ultimately it was super cool to build a full stack app!
- Implementing cypress was something challenging for us, so getting th syntax correct took additional research. 
- Error was tricky but we were able to add properties to state to handle errors. 
- We would have liked to further this app by beautfying the recommendation page, and cleaning up the functionality. 

## Authors

<table>
    <tr>
      <td> Reid Poole <a href="https://github.com/rpoole444">GH</td>
    </tr>
<td><img src="https://avatars.githubusercontent.com/u/111818942?v=4" alt="Reid Poole"
 width="150" height="auto" /></td>

   <tr>
      <td> Karrar Qasim <a href="https://github.com/KarrarQ">GH</td>
    </tr>
 <td><img src="https://avatars.githubusercontent.com/u/108508596?v=4" alt="Karrar Qasim"
 width="150" height="auto" /></td>
 
   <tr>
      <td> John Ammon <a href="https://github.com/Mortis78">GH</td>
    </tr>
 <td><img src="https://avatars.githubusercontent.com/u/113194002?v=4" alt="John Ammon"
 width="150" height="auto" /></td>
</table>
  









