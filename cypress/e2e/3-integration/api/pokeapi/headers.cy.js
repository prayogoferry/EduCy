describe('validate headers', ()=>{
    it('Successfuly validate content type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include', 'application/json; charset=utf-8')

        //tugas 

        // cy.get('@pokemon').then((response)=>{
        //     expect(response.status).equal(200)
        //     expect(response.body.abilities).should('include', 'limber')
        // })

        cy.request("GET", "https://pokeapi.co/api/v2/pokemon/ditto")
        .then((response)=>{
            expect(response.body.abilities).contain('name')
        })

        cy.get('@pokemon').its('body').its("abilities")
        .should('include', "ability")

        
    });
})