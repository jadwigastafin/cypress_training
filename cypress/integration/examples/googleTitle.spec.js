describe('Check page title', () => {
    it('title check', () => {
        cy.visit('https://www.google.pl/');
        cy.title().should('eq', 'Google');
    })
}) 
