describe('Orange HRM Tests', () => {
  it.skip('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(cy.get('[name="username"]').type('Admin'))
    cy.get(cy.get('[name="password"]').type('admin123'))
    cy.get(cy.get('.oxd-button').click())
    cy.location('pathname').should('equal' , '/web/index.php/dashboard/index')
    cy.get(cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')).contains('Dashboard')
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(cy.get('[name="username"]').type('Test'))
    cy.get(cy.get('[name="password"]').type('Test'))
    cy.get(cy.get('.oxd-button').click())
    cy.get(cy.get('.oxd-alert-content > .oxd-text'))
  }) 

})