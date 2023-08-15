describe('tugas validate content', ()=>{

    it('Successfuly validate content type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').then((response)=>{
            expect(response.body.abilities[0].ability.name).to.equal('limber')
            expect(response.body.abilities[0].ability.url).to.equal('https://pokeapi.co/api/v2/ability/7/')
        })
    })
})