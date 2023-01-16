describe('Transaction page', () => {
  it('passes', () => {

    cy.visit('localhost:3000')
    cy.get('#username').type('Djohn')
    cy.get('#password').type('Respons11{enter}')
    cy.contains('Account Balance').should('be.visible')
    
    cy.log('Visit transaction detail')
    cy.visit('localhost:3000/transaction/NMrYdkrY_18W')


  })
})