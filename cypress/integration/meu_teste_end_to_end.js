// meu_teste_end_to_end.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Teste End-to-End', () => {
    it('Meu Primeiro Teste', () => {
        // Abre o site
        cy.visit('http://localhost:5000/')
        
        // Verifica se existe o livro desejado
        cy.get('[data-id=3]').should('contain.text', 'Design Patterns')
        
        // Calcula o frete
        cy.get('[data-id=3]').within(() => {
           cy.get('input').type('10000-000')
           cy.contains('Calcular Frete').click().then
           cy.wait(2000)
        })
        cy.get('.swal-text').contains('O frete é: R$')

        // Fecha o pop-up com o preço do frete
        cy.get('.swal-button').click()

        // Realiza a compra do livro
        cy.get('[data-id=3]').within(() => {
            cy.contains('Comprar').click().then
            cy.wait(2000)
        })
        cy.get('.swal-text').contains('Sua compra foi realizada com sucesso')
        cy.get('.swal-button').click()
        
    })
  })
