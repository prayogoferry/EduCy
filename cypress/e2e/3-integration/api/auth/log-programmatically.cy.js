it('successfully logs in programmatically', () => {
    // cy.intercept('GET', `${Cypress.env('apiUrl')}/models?userId=*`)
    //   .as('getUserModels')
  
    //url = Cypress.env("urlApi")
    cy.request('POST', `https://app.brmodeloweb.com/users/login`, {
      username: Cypress.env('userMail'),
      password: Cypress.env('userPass'),
    }).then((response) => {
      cy.setCookie('sessionId', response.body.sessionId)
      cy.setCookie('userId', response.body.userId)
      //cy.setCookie('userName', response.body.userName)
    })
  
    //cy.visit('/#!/main')
    // cy.wait('@getUserModels')
    //cy.contains('h2', 'Models').should('be.visible')
  })