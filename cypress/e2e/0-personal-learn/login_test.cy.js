

describe('working with inputs ',()=>{

    beforeEach(()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login')
    })

    it('Shouls fill login field', () => {
        cy.get('#user_login').clear().type('username')
        cy.get('#user_password').clear().type('password')
        cy.get('#user_remember_me').check()
        cy.get('.btn').click(2)
        
        
    });

})
