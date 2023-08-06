/// <reference types = "Cypress"/>

// before(()=>{
    
// })

it('Pays Bill', () => {
    const payee = ["Sprint", 'Bank of America', 'Aplle', 'Wells Fargo']
    const account =['Savings', 'Checking', 'Loan', 'Credit Card', ]
    const amount = '200'
    const date= '8'
    const desc = 'description'

    cy.visit('http://zero.webappsecurity.com/login.html', {timeout:10000})

    cy.login_2()//login dengan lain skema ke2 di custom.js

    cy.get('#pay_bills_tab > a').click()
    cy.url().should("contain", "/bank/pay-bills.html")
    cy.get('.board-header').should('contain.text', 'Make payments to your saved payees')

    cy.pay_bill(payee[0], account[1], amount, date, desc)

    // cy.get('#alert_content > span').should('contain.text', "The payment was successfully submitted.")
});