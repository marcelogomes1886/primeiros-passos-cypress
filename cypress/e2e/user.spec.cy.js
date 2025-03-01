import userData from '../fixtures/userData.'
import LoginPage from '../pages/loginPage.'
import DashboardPage from '../pages/dashboardPage.'
import MenuPage from '..//pages/menuPage'
import MyInfoPage from '..//pages/myInfoPage.'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HMH Tests', () => {


  it('User Info Update - Successful', () => {
 
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.string())
    myInfoPage.saveForm()

  })
})