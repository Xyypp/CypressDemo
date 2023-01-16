describe('Navigation', function(){

  it('should navigate throught all pages', ()=>{
    cy.log('Visit homepage')    
    cy.visit('http://localhost:3000/')
    cy.contains('Sign in')

    cy.log('Visit sign up page from sign in page')
    cy.get('[data-test="signup"]').click()
    cy.url().should('contain','signup')

    cy.log("Return to login page")
    cy.get('.MuiGrid-root > a').click()
    cy.url().should('contain','signin')

    cy.log('login')
    cy.get('#username').type('Djohn')
    cy.get('#password').type('Respons11')
    cy.get('[data-test="signin-submit"]').click()

    //ADD SOME ASSERTION !
    cy.log('Visit My Account page')
    cy.get('[data-test="sidenav-user-settings"]').click()

    cy.log('Visit Bank Accounts page')
    cy.get('[data-test="sidenav-bankaccounts"]').click(); 
    
    cy.log('Visit Notifications page')
    cy.get('[data-test="sidenav-notifications"]').click()

    // const uuid = () => Cypress._.random(0, 1e6)
    // const id = uuid()
    // const username = `username${id}`

    // cy.get('#username').
    // type(username).should('have.value',username)

    // cy.get('#password')
    // .type('Respons11').should('have.value','Respons11')

    // cy.get('[data-test="signin-submit"]').click()
  })

})