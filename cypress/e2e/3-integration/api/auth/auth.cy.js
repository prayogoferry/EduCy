/// <reference types = "cypress"/>

describe('basic auth', ()=>{

    it('Successfully login by appending username and password in URL ', () => {
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get('p').should('contain.text',"Congratulations")
    });

    it('Successfully login using headers', () => {
        cy.visit("https://the-internet.herokuapp.com/basic_auth", {
            headers: {
                authorization: 'Basic YWRtaW46YWRtaW4='
            }, 
            failOnStatusCode: true
        })
            cy.get('p').should('contain.text',"Congratulations")
    });


/// tugas login api
    it('login via API', () => {
       // cy.loginViaAPI()
        cy.brmodel()
        cy.contains('h2', "Models").should('be.visible')
        cy.get('h2').should('contain.text', "Models")
    });
})