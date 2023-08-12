///<reference types = "cypress"/>

describe('delete user', ()=>{

    it('delete user', () => {
        cy.request('DELETE', "https://reqres.in/api/users/2").then((response)=>{
            expect(response.status).equal(204)
        })
    });
})