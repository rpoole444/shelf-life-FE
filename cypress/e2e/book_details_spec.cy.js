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

    it('Should be able to click Your Favorites and visit the favorites page', () => {
        cy.intercept({
            method:'POST',
            url:'http://localhost:3001/api/v1/favorites'
         },
         {
            statusCode:201,
            body:{
                id: 8,
                isbn: "9780385546027",
                title: "THE JUDGE'S LIST",
                description: "The second book in the Whistler series. Investigator Lacy Stoltz goes after a serial killer and closes in on a sitting judge.",
                amazon_link: "https://www.amazon.com/dp/0385546025?tag=NYTBSREV-20",
                author: "John Grisham",
                recommended_by: "Karrar Qasim",
                
            }
        })  
        
        cy.get(".favorites-link").click()
        cy.url("http://localhost:3000/").should('include',"favorites")
    })

    it('should allow a user to return to home page', () => {
        cy.intercept('http://localhost:3001/api/v1/selectedBook', { selectedBook: 'singleBook.json' })
        cy.visit('http://localhost:3000/selectedBook')
          .get(".logo").should('have.attr', 'alt', 'Book club logo').click()
        cy.location().should((location) => {
          expect(location.href).to.eq('http://localhost:3000/')
        })
    })

    // it('Should be able to click Your Favorites and visit the favorites page', () => {
    //     cy.intercept({
    //         method:'POST',
    //         url:'http://localhost:3001/api/v1/favorites'
    //      },
    //      {
    //         statusCode:201,
    //         body:{
    //             id: 8,
    //             isbn: "9780385546027",
    //             title: "THE JUDGE'S LIST",
    //             description: "The second book in the Whistler series. Investigator Lacy Stoltz goes after a serial killer and closes in on a sitting judge.",
    //             amazon_link: "https://www.amazon.com/dp/0385546025?tag=NYTBSREV-20",
    //             author: "John Grisham",
    //             recommended_by: "Karrar Qasim",
                
    //         }
    //     })  
        
    //     cy.get(".favorites-link").click()
    //     cy.url("http://localhost:3000/").should('include',"favorites")
    // })

    

})


