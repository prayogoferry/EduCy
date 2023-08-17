

describe('set negative function', ()=>{

    it('negative test', () => {
        cy.request({
            method : 'GET',
            url: "https://pokeapi.co/api/v2/pokemon/jack",
            failOnStatusCode : false}).as('negative')
        cy.get('@negative').its('status').should('equal', 404)
        
    });

    // it('negative'), ()=>{
    //     cy.request({
    //         method : 'GET',
    //         url: "https://pokeapi.co/api/v2/pokemon/jack",
    //         failOnStatusCode : false}).then((response)=>{
    //             expect(response.status).equal(404)
    //         })
    // }
})