///<reference types = "cypress"/>

describe('Add new user', ()=>{
    it('Successfully create new user', () => {
        var users = {
            "name":"Jack",
            "job":"test engineer"
        }
        cy.request("POST", "https://reqres.in/api/users", users).then((response)=>{
            expect(response.status).equal(201)
            expect(response.body.name).contain(users.name)
            expect(response.body.job).contain(users.job)
            //expect(response.pretty).include(users.name)
            //expect(response.job).equal(users.job)
        })
    });
})