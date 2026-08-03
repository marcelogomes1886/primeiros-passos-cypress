describe('Orange HRM Tests', () => {
  
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: ".oxd-button",
    dashboardTitle: ".oxd-topbar-header-breadcrumb > .oxd-text",
    errorMessage: ".oxd-alert-content > .oxd-text"
  }
  
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()

    cy.location('pathname')
      .should('equal', '/web/index.php/dashboard/index')

    cy.get(selectorsList.dashboardTitle)
      .should('contain', 'Dashboard')
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get(selectorsList.usernameField).type('Test')
    cy.get(selectorsList.passwordField).type('Test')
    cy.get(selectorsList.loginButton).click()

    cy.get(selectorsList.errorMessage)
      .should('contain', 'Invalid credentials')
  })

})