describe('validate headers', ()=>{
    it('Successfuly validate content type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include', 'application/json; charset=utf-8')

        //tugas 

        cy.get('@pokemon').then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.name).contain('ditto')
            expect(response.body.abilities).contain({url:'https://pokeapi.co/api/v2/ability/7'})
        })

        cy.request("GET", "https://pokeapi.co/api/v2/pokemon/ditto")
        .then((response)=>{
            expect(response.body.abilities.ability).contain({url : 'https://pokeapi.co/api/v2/ability/7'})
            //expect(response.body).contain('abilities')
        })

        cy.get('@pokemon').its('body').its('name')
        .should('include', "ditto")
    });

    it('validate', () => {
        cy.request("https://pokeapi.co/api/v2/pokemon/charmander").as('poke')
        cy.get('@poke').its('headers').its('content-encoding').should('include', "gzip")
        cy.get('@poke').its('body').its('name').should('contain', 'charmander')

       // cy.get('@poke').its('body').its('abilities').its("ability").should('contain', 'ablilities')
       cy.get('@poke').then((response)=>{
        expect(response.body.name).contain('charmander')        
       })
        })
    });
