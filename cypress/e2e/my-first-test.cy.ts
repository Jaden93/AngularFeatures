describe('My First Test', () => {
  it('Apri welcome Page!', () => {
    cy.visit('http://localhost:4500')
    cy.contains('Benvenuto nella Home')
  })
})

describe('Test accesso login', () => {
  it('Apri Accesso Page!', () => {
    cy.visit('http://localhost:4500/accesso')
      .then(() => {
        cy.contains('Accesso')
        cy.contains('type')
      });

  })
})

describe('Test Content 3', () => {
    it('Verifica pulsanti e input che aggiornano toolbarTitle', () => {
      cy.visit('http://localhost:4500/content3')
  
      // 1. Verifica il titolo iniziale
      cy.get('span[toolbar-title]').should('exist')
  
      // Salva il valore iniziale del titolo
      cy.get('span[toolbar-title]').invoke('text').as('titoloIniziale')
  
      // 4. Clicca il pulsante "Aggiorna Titolo"
      cy.contains('Aggiorna Titolo').click()
      cy.get('span[toolbar-title]').should('have.text', 'Titolo Aggiornato!')
  
      // 5. Digita nell’input un nuovo valore
      cy.get('input[placeholder="Cambia titolo toolbar"]')
        .clear()
        .type('Nuovo Titolo Personalizzato')
  
      // 6. Verifica che il titolo della toolbar sia cambiato
      cy.get('span[toolbar-title]').should('have.text', 'Nuovo Titolo Personalizzato')
    })
  })