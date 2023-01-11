describe('Test 1: Open the site', () => {
  it('passes', () => {
    cy.visit('/')

    cy.url().should('include', '/posts/NewPost_Strategy1')
  })
})