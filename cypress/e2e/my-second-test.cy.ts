describe('My First Test', () => {
  it('Apri welcome Page!', () => {
    cy.visit('http://localhost:4500')
    cy.contains('Benvenuto nella Home')
  })
})
describe('Test accesso login', () => {
  it('Apri Accesso Page!', () => {
    cy.visit('http://localhost:4500/accesso')
    cy.contains('Accesso')
    cy.contains('type')

  })
})

