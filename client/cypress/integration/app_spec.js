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