describe('Login page', () => {
//TODO refacto to avoid duplication

  it('Should display nicely', () => { 
    cy.visit('/signin')
    cy.get('#username').should('be.visible')
    cy.get('#password').should('be.visible')
    cy.get('[data-test="signin-submit"]').should('be.visible')
  })

  it('should display error message when empty email and password submitted', () =>{
    cy.visit('/signin')
    cy.get('[data-test="signin-submit"]').click()
    cy.contains('Username is required').should('be.visible')
  })

  it('Sign in button should be disable when password is empty', ()=>{
    cy.visit('/signin')
    cy.get('#username').type('testerrorlogin')
    cy.get('[data-test="signin-submit"]').should('be.disabled')
  })

  it('Sign in button should be disable + error message when username is empty', ()=>{
    cy.visit('/signin')
    cy.get('#password').type('testpaswerror')
    cy.get('[data-test="signin-submit"]').should('be.disabled')    
    cy.contains('Username is required').should('be.visible')
    cy.log('Le message Username required est bien présent')
  })

  it('should display error message when login failed',()=>{
    cy.visit('/signin')
    cy.get('#username').type('testerrorlogin')
    cy.get('#password').type('testpaswerror{enter}')
    cy.contains('Username or password is invalid').should('be.visible')
  })

  it('should redirect to homepage when logging is succesful',()=>{
    cy.visit('/signin')
    cy.get('#username').type('Djohn')
    cy.get('#password').type('Respons11')    
    cy.get('[data-test="signin-submit"]').click()
    cy.contains('Account Balance').should('be.visible')
  })
})