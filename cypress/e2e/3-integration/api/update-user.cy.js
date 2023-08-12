/// <reference types = "cypress"/>

describe('update user', ()=>{
    it('user update', () => {
        var newUser = {
            name : "mas bambank",
            job : "test engineer"
        }
    
        cy.request('PUT', "https://reqres.in/api/users/2", newUser).then((response)=>{
            expect(response.status).equal(200)
        })
    });

})