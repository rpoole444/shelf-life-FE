describe('Book Club book details page user flow', () => {

    it('should display all book details for a single book', () => {
      cy.intercept('https://shelf-life-db.herokuapp.com/api/v1/books/9780525559474', { fixture: 'singleBook.json' })
      cy.visit('http://localhost:3000/9780525559474/selectedBook')
        .get('.selected-cover').should('have.attr', 'src', 'https://storage.googleapis.com/du-prd/books/images/9780525559474.jpg')
        .get('.selected-title').contains('THE MIDNIGHT LIBRARY')
        .get('.selected-author').contains('Matt Haig')
        .get('.selected-description').contains('Nora Seed finds a library beyond the edge of the universe that contains books with multiple possibilities of the lives one could have lived.')
        .get('.amazon-store-link').should('have.attr', 'href', 'https://www.amazon.com/dp/0525559477?tag=NYTBSREV-20' )
    })
  
    it('should allow a user to add book to favorites', () => {
      cy.intercept('GET', 'https://shelf-life-db.herokuapp.com/api/v1/books/9780525559474', { fixture: 'singleBook.json' })
      cy.intercept('POST', 'https://shelf-life-db.herokuapp.com/api/v1/favorites',  
       {
         statusCode: 201,
         body: {
            "isbn": "9780525559474",
            "title": "The Midnight Library",
            "description": "Nora Seed finds a library beyond the edge of the universe that contains books with multiple possibilities of the lives one could have lived.",
            "amazon_link": "https://www.amazon.com/dp/0525559477?tag=NYTBSREV-20",
            "book_image": "https://storage.googleapis.com/du-prd/books/images/9780525559474.jpg",
            "author": "Matt Haig"
          }
       })
      cy.intercept('PATCH', 'https://shelf-life-db.herokuapp.com/api/v1/books/9780525559474', { "isFavorited": "true" })
      cy.intercept('GET', 'https://shelf-life-db.herokuapp.com/api/v1/books/9780525559474', { fixture: 'isFavoritedSingleBook.json' })
      cy.intercept('GET', 'https://shelf-life-db.herokuapp.com/api/v1/favorites', { fixture: 'singleFavoritedBook.json' })
      cy.visit('http://localhost:3000/9780525559474/selectedBook')
        .get('.button-container').as('.favorite-button').click()
        .get('.unfavorite-button').contains('Remove from Favorites')
        .get('.favorites-link').click()
      cy.location().should((loc) => {
        expect(loc.href).to.eq('http://localhost:3000/favorites')
      })
        .get('.book-card').contains('THE MIDNIGHT LIBRARY')
        .get('.book-card').contains('Matt Haig')
        .get('.book-cover').should('have.attr', 'src', 'https://storage.googleapis.com/du-prd/books/images/9780525559474.jpg')
        .get('.learn-more-btn').contains('Learn More').click()
        .get('.unfavorite-button').contains('Remove from Favorites')
    })
  })


