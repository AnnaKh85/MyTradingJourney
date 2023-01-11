describe('Test 1: Open the site', () => {
  it('passes', () => {
    cy.visit(Cypress.config().baseUrl)

    cy.url().should('not.include','posts/NewPost_Strategy1')

  })
})