describe('Random Quote Generator', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Random quote should be generated on page load', () => {
    cy.get('.quote-container blockquote p').should('not.be.empty');
    cy.get('.quote-container blockquote footer.author').should('not.be.empty');
  });

  it('Generates a new quote on button click', () => {
    cy.get('button').click();
    cy.get('.quote-container blockquote p').should('not.be.empty');
    cy.get('.quote-container blockquote footer.author').should('not.be.empty');
  });
});
