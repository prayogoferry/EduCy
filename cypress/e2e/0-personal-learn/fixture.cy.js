/// <reference types = "Cypress"/>

describe (()=>{

    beforeEach(()=>{
        cy.visit('sauceddemo.com')
       
    })

    


    it("Logi with fixture", () => {
        cy.fixture('saucedemo').then(demo=>{
            const username = demo.username
            const password = demo.password

            cy.get('.input').clear()
            cy.get('.input').type(username(1))
        })

    });
})