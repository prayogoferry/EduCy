

describe('validate content', ()=>{

    it('succesfully validate content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/venusaur').as('venusaur')
        cy.get('@venusaur').its('body').should('include', {name:'venusaur'})
        
        cy.get('@venusaur').then((response)=>{
           const data = response.body.abilities
            cy.log(data)
            expect(response.body.abilities[0].ability.url).contain("https://pokeapi.co/api/v2/ability/")
            
        })
       //cy.log(data)

    });

    it('update user', () => {
        var newUser = {
            'name' : "mas pur",
            'job' : "web developer"
        }
        cy.request('PUT', "https:reqres.in/api/users/2", newUser).then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.name).equal(newUser.name)
        })
    });
})