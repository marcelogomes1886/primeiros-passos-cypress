class MenuPage {

    selectorList() {
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',

    }

    return selectors

    }

    accessMyInfo() {
        cy.get(selectorList.myInfoButton).click()
    }

}

export default LoginPage