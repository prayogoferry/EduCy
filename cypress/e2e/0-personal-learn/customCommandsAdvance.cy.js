/// <reference types = "Cypress"/>



beforeEach(()=>{
    cy.visit('http://zero.webappsecurity.com/login.html', {timeout:10000})
    cy.load_fixture()
})

it('Login into the Website', () => {//login dengan skema pertama dalam custom.js
    
    cy.get("@userData").then(dataUser=>{

        let locator = '#user_login'
        let locator_2 = '#user_password'

        cy.url().should('include', 'login.html')

        cy.login(dataUser.username[0], dataUser.password[0], locator, locator_2)

        cy.url().should('include', "/bank/account-summary.html")
        cy.get(':nth-child(3) > .dropdown-toggle').should('contain', dataUser.username[0])


    })
})





 it('pay bills', () => {

    cy.login_2()//login dengan lain skema ke2 di custom.js

    cy.get('#pay_bills_tab > a').click()
        cy.url().should("contain", "/bank/pay-bills.html")
        cy.get('.board-header').should('contain.text', 'Make payments to your saved payees')

        cy.get('#sp_payee').select('Apple')
        cy.get('#sp_account').select('Loan')
        cy.get('#sp_amount').type('200')
        cy.get('#sp_date').click()
        cy.get('.ui-state-default', {timeout:40000}).contains('8').click()
        cy.get('#sp_description').clear().type('Description')
        cy.get('#pay_saved_payees').click()
        cy.get('#alert_content > span').should('contain.text', "The payment was successfully submitted.")
    
 });