describe('Movies Page tests', () => {
  it('should find movies by search criteria and display it', () => {
    cy.visit('http://localhost:3000/');
    cy.get('input').type('gold');
    cy.contains('Search').click();

    cy.url().should('include', '/search/gold');
    cy.get('.movie-items_movies').should('contain', 'Golden');
  });
});
