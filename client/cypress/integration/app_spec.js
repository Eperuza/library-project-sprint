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
    //   cy.findAllByRole('listitem').should('have.length', 5);
    })

})

describe('app obtains list of books from mock Express endpoint', () =>{
    beforeEach(()=> {
        cy.visit('/')
        cy.intercept('GET', 'http://localhost:3001/api/books', {body: books})
    })

    it('returns all of the books in the library', () => {
        cy.findAllByRole('listitem').eq(2).should('have.text', 'The Adventures of Zach and Jeff')
    })
})

describe('Displays books retrieved from api endpoint', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('returns all of the books in the library', () => {
        cy.findAllByRole('listitem').eq(2).should('have.text', 'The Adventures of Zach and Jeff')
    })
})

describe('displays a books details when user navigates to /books/<bookId>', () => {

    it('navigates to the details about a particular book', async () => {
        await cy.visit('/bookdetails/1')
        cy.get('.bookTitle').should('have.text', `Derek's Biography`)
    })
})

describe('dispalys the details for a particular book when the user clicks on that book', () => {

    it('redirects the user to the book details that they clicked on',() => {
        cy.visit('/');
        cy.findAllByRole('listitem').eq(2).click()
        const url =cy.url()
        url.should('eq', 'http://localhost:3000/bookdetails/3')
    })
})