import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.'
import DashboardPage from '../pages/dashboardPage.'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Orange HMH Tests', () => {

  const selectorList = {
    
    

    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[placeholder='Last Name']",
    genericField: ".oxd-input--active",
    submitButton: "[type='submit']",
  }

  it.only('User Info Update - Successful', () => {
   loginPage.accessLoginPage()
   loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
   dashboardPage.checkDashboardPage()
   
    
    
    //
    //cy.get(selectorList.firstNameField).clear().type('FirstNameTest')
    //cy.get(selectorList.lastNameField).clear().type('LastNameTest')
    //cy.get(selectorList.genericField).eq(4).clear().type('EmployeeIdTest')
    //cy.get(selectorList.submitButton).eq(0).click()
    //cy.get('body').should('contain', 'Successfully Updated')
    
    
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)

  })

})