import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {
  
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: ".oxd-button",
    dashboardTitle: ".oxd-topbar-header-breadcrumb > .oxd-text",
    errorMessage: ".oxd-alert-content > .oxd-text"
  }
  

  
  it('Login - Success', () => {
    cy.visit('/auth/login')

    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()

    cy.location('pathname')
      .should('equal', '/web/index.php/dashboard/index')

    cy.get(selectorsList.dashboardTitle)
      .should('contain', 'Dashboard')
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')

    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()

    cy.get(selectorsList.errorMessage)
      .should('contain', 'Invalid credentials')
  })

})