class MyInfoPage {

    selectorList() {
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            firstNameField: "[name='firstName']",
            lastNameField: "[placeholder='Last Name']",
            genericField: ".oxd-input--active",
            submitButton: "[type='submit']",

        }

        return selectors

    }

    fillPersonalDetails(firstName, lastName, employeeIdTest) {
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
        cy.get(this.selectorList().genericField).eq(4).clear().type(employeeIdTest)

    }

    saveForm() {
        cy.get(this.selectorList().submitButton).eq(0).click({ force: true })
        cy.get('body').should('contain', 'Successfully Updated')


    }
}



export default MyInfoPage