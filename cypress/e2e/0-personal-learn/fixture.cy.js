/// <reference types = "Cypress"/>

describe ('Login ',()=>{

    beforeEach(()=>{
      cy.visit('https://practicetestautomation.com/practice-test-login/', {timeout:10000})
    //   cy.url().should('contain', 'facebook.com')
    })

    it('Positive Login with fixture ', () => {
        cy.fixture("user").then(u=>{
           let username = u.username
           let password = u.password
           

            cy.get('#username').clear().type(username[1])
            cy.get('#password').clear().type(password[1])
            cy.get('#submit').click()

            cy.url().should('include', 'practicetestautomation.com/logged-in-successfully/')
            cy.get('strong').should('contain.text', 'Congratulations' || 'successfully logged in')
            cy.get('.wp-block-button__link').should('be.visible')
        })
        
    });

    it("Negative Username test with fixture ", () => {
        cy.fixture("user").then(u=>{
            let username = u.username
            let password = u.password

            cy.get('#username').clear().type(username[2])
            cy.get('#password').clear().type(password[1])
            cy.get('#submit').click()

            cy.get('#error').should('contain.text', 'Your username is invalid!')
        })  
        
    });

    it("Negative Password test with fixture ", () => {
        cy.fixture("user").then(u=>{
            let username = u.username
            let password = u.password

            cy.get('#username').clear().type(username[1])
            cy.get('#password').clear().type(password[0])
            cy.get('#submit').click()

            cy.get('#error').should('contain.text', 'Your password is invalid!')
        })        
    });

    // it("Logi with fixture", () => {
    //     cy.fixture('saucedemo').then(saucedemo=>{
    //         const username = saucedemo.username
    //         const password = saucedemo.password

    //         cy.get('[data-test="username"]').clear()
    //         cy.get('[data-test="username"]').type(username(1))
    //     })

    // });
})