const books = require('../../src/books.json')

describe('home page meets user stories', () => {
    beforeEach(()=> {
        cy.visit('/')
    })
    it('has a heading, SDI Library', () => {
        cy.findByRole('heading').should('have.text', 'SDI Library')
    })

    it('Displays a list of all books in the library', () => {
      cy.findByRole('list').should('have.class', 'bookList');
      cy.findAllByRole('listitem').should('have.length', 5);
    })

})

describe('app obtains list of books from Express endpoint', () =>{
    beforeEach(()=> {
        cy.visit('/')
        cy.intercept('GET', 'http://localhost:3001/api/books', {body: books})
    })

    it('returns all of the books in the library', () => {
        cy.findAllByRole('listitem').eq(2).should('have.text', 'The Adventures of Zach and Jeff')
    })
})