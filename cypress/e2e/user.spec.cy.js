import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {
  
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: ".oxd-button",
    dashboardTitle: ".oxd-topbar-header-breadcrumb > .oxd-text",
    errorMessage: ".oxd-alert-content > .oxd-text",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    
  }
  

  
  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')

    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()

    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')

    cy.get(selectorsList.dashboardTitle).should('contain', 'Dashboard')

    cy.get(selectorsList.myInfoButton).click()  

    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')

    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')

    cy.get(selectorsList.genericField).eq(3).clear().type('NicknameTest')

    cy.get(selectorsList.genericField).eq(4).clear().type('Employee')

    cy.get(selectorsList.genericField).eq(5).clear().type('OtherIdTest')

    cy.get(selectorsList.genericField).eq(6).clear().type('DriversLicenseTest')

   

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