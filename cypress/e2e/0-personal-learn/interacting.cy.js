/// <reference types = 'Cypress'/>

beforeEach(()=>{
    cy.visit('https://books.toscrape.com/index.html', (setTimeout(1000)));
})

describe('interacting browser action ', ()=> {

    beforeEach(()=>{
        cy.visit('https://books.toscrape.com/index.html');
        cy.url().should('include', 'index.html')
        
    })


     it('should click on travel category', ()=>{
        cy.get('a').contains('Travel').click()
        cy.get('h1').should('have.text', 'Travel')
       
     })
     
})