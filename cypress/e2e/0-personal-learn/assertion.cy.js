///<reference types = 'Cypress'/>

describe ('Browser Actions', ()=>{

    beforeEach(()=>{
        cy.visit('https://example.com/')
    })

    it('should check correct url', () => {
        cy.url().should('include', 'example.com')
    });

    it('should check correct element on the page', () => {
        cy.get('h1').should('be.visible')
        cy.get('h1').should('contain', 'Example Domain')
        cy.get('h1').contains('Example Domain')
        
    });


   
        
    
})

