describe('validate headers', ()=>{
    it('Successfuly validate content type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include', 'application/json; charset=utf-8')

        //tugas 
        cy.get('@pokemon').then((response)=>{
            expect(response.status).equal(200)
            expect(response.body)
        })
    });
})