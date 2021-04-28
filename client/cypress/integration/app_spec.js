describe('home page meets user stories', () => {
    beforeEach(()=> {
        cy.visit('/')
    })
    it('has a heading, SDI Library', () => {
        cy.findByRole('heading').should('have.text', 'SDI Library')
    })
})