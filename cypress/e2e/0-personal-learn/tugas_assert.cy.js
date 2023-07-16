///<reference types = "cypress"/>

describe('tugas', ()=>{
    it('clicking "type" shows the right heading', ()=>{
        cy.visit('https://example.cypress.io')
       // cy.pause()//jeda

        cy.contains('type').click()
        cy.url().should('include', "commands/actions")

        cy.get('#email1')
            .type("fake@email.com")
             .should('have.value', "fake@email.com")

    })
})