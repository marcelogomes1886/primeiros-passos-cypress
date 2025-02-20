describe('Orange HMH Tests', () => {
  
  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton:   "[type='submit']",
    sectionTitleTopbar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
  }
  
  it('Login - Successful', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type("ADMIN")
    cy.get(selectorList.passwordField).type("admin123")
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type("Test")
    cy.get(selectorList.passwordField).type("Test")
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })

})