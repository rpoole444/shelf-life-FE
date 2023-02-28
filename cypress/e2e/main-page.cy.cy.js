

describe('example to-do app', () => {
  beforeEach(() => {
    cy.intercept('GET','https://shelf-life-db.herokuapp.com/api/v1/books', {fixture: "library.json"})
    cy.visit('http://localhost:3000/')
  })

  it('Should display a title and cards with books that have a title, author, recommendation, "learn More" button, and book cover ', () => {
    cy.contains("Shelf Life")
    
    cy.get(".book-card")
    .should ('have.length', 3)

    cy.get(".book-cover")
    .should('have.length', 3)

    cy.get(".learn-more-btn")
    .should('have.length', 3)

    cy.contains("THE JUDGE'S LIST")
    cy.contains("John Grisham")
    cy.contains("Recommended By: Karrar Qasim")

    cy.contains("THE HORSEWOMAN")
    cy.contains("James Patterson and Mike Lupica")
    cy.contains("Recommended By: Karrar Qasim")

    cy.contains("WISH YOU WERE HERE")
    cy.contains("Jodi Picoult")
    cy.contains("Recommended By: Karrar Qasim")
  })

 it('Should be able to click a book and visit the book details ', () => {
    cy.get(".learn-more-btn").first().click()
     cy.intercept('GET','https://shelf-life-db.herokuapp.com/api/v1/books/9780385546027',{
          id: 8,
          isbn: "9780385546027",
          title: "THE JUDGE'S LIST",
          description: "The second book in the Whistler series. Investigator Lacy Stoltz goes after a serial killer and closes in on a sitting judge.",
          amazon_link: "https://www.amazon.com/dp/0385546025?tag=NYTBSREV-20",
          author: "John Grisham",
          recommended_by: "Karrar Qasim",
          book_image: "https://storage.googleapis.com/du-prd/books/images/9780385546027.jpg",
          created_at: "2023-02-22T03:24:14.973Z",
          updated_at: "2023-02-22T03:24:14.973Z",
          isFavorited: "false"
        })    
    cy.url("http://localhost:3000/").should('include', "9780385546027/selectedBook")
  })

  it('Should display a functional route called "Your Favorites" ', () => {
    cy.get("nav")
  })
})
