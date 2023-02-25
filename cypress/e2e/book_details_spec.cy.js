describe('single book view', () => {
    beforeEach(() => {
      cy.intercept('GET','http://localhost:3001/api/v1/selectedBook', {fixture: "singleBook.json"})
      cy.visit('http://localhost:3000/')
    })


    it('should have a title', () => {
        cy.contains("Shelf Life")
    })

    it('should show book and all book details',() => {
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

    

})


