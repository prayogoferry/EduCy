/// <reference types = "cypress"/>

describe('get single user', ()=>{

    it('single user', () => {
        cy.request("GET", "https://reqres.in/api/users/2").then((response)=>{
            expect(response.status).equal(200)
        })
    });
})