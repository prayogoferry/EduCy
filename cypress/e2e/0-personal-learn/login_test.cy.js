

describe('working with inputs ',()=>{

    beforeEach(()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login')
    })

    it('Should fill login field', () => {
        cy.get('#user_login').clear().type('username')
        cy.get('#user_password').clear().type('password')
        cy.get('#user_remember_me').check()
        cy.get('.btn').click(2)   
    })
        
    it('Should try to login with fixture', ()=> {
        cy.fixture('user').then(user=> {
           const username = user.username
           const password = user.password

           cy.get('#user_login').clear()
           cy.get('#user_login').type(username)

           cy.get('#user_password').clear()
           cy.get('#user_password').type(password)

           cy.get('#user_remember_me').check()
           cy.get('.btn').click()

           cy.get('.alert').should('contain.text', 'Login and/or password are wrong.')//class mengggukan titik(.) untuk menunjuk class di elemen
        })

    })


    

})
