/// <reference types = "Cypress"/>

describe('Get Users', ()=>{
    it("verify the list will displayed", () => {
        cy.request({
            method : "GET",
            url:"https://reqres.in/api/users?page=2&per_pages=1&delay=3"
           // url:"https://reqres.in/api/"
        }).as('users')
        cy.get("@users").its('status').should('equal', 200)
       // cy.get("@users").its('pretty').should('contain',"Lawson")
    });
})