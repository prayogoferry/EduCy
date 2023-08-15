describe('validate content', ()=>{

    it.only('succesfully validate content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/venusaur').as('venusaur')
        cy.get('@venusaur').its('body').should('include', {name:'venusaur'})
        cy.get('@venusaur').its('body').its('abilities').should('include', {name:'overgrow'})
    });

    it('update user', () => {
        newUser = {
            'name' : "mas pur",
            'job' : "web developer"
        }
        cy.request('PUT', "https:reqres.in/api/users/2", newUser).then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.name).equal(newUser.name)
        })
    });
})