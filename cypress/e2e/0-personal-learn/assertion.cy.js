///<reference types = 'Cypress'/>

describe ('Browser Actions', ()=>{
    it('connect correct url', ()=>{
        cy.visit('https://example.com/')
    })

    it('should check correcr url', () => {
        cy.url().should('include', 'example.com')
    });


   
        
    
})

