///<reference types = "cypress"/>

describe('tugas assert', ()=>{

    beforeEach(() => {
        cy.visit('https://example.cypress.io')
    });
    
    

    it.only('clicking "type" shows the right heading', ()=>{

        cy.contains('type').click()
        cy.url().should('include', "commands/actions")

        cy.get('#email1')
            .type("fake@email.com")
             .should('have.value', "fake@email.com")

    })
})