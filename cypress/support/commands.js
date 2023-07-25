// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('load_fixture', ()=>{
    cy.fixture("user").as('userData');
})

Cypress.Commands.add('login', (username, password, element1, element2)=>{

    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get(element1).clear().type(username)
    cy.get(element2).clear().type(password)
    cy.contains('Sign in').click()
    
})

Cypress.Commands.add('login_2', ()=>{
    cy.fixture("user").then(data_user=>{
        let locator_1 = '#user_login'
        let locator_2 = '#user_password'

    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get(locator_1).clear().type(data_user.username[0])
    cy.get(locator_2).clear().type(data_user.password[0])
    cy.contains('Sign in').click()
    })
})

Cypress.Commands.add('input', (element, inputText)=>{
    cy.get(element).clear().type(inputText)
})