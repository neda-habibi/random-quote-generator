describe('Random Quote Generator', () => {
  it('Random quote should be generated on page load', () => {
    cy.get('.quote-container blockquote p').should('not.be.empty');
    cy.get('.quote-container blockquote footer.author').should('not.be.empty');
  });
});
