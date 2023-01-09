describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('input').type('gold');
    cy.contains('Search').click();

    cy.url().should('include', '/search/gold');
    cy.get('div[class^="movie-items_movies"]').should('contain', 'Golden');
  });
});
