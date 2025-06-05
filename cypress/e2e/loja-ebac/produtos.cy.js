///<reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

beforeEach(() => {
    cy.visit('produtos')
});
   


 it('Deve selecionar um produto da lista', () => {
    cy.get('.products > .row')
    //cy.get('.block-inner')
      //.first()
      //.last()
      //.eq(1)
      .contains('Apollo Running Short')
      .click()

     cy.get('#tab-title-description > a').should('contain','Descrição')

 });

})