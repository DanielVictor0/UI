/// <reference types="cypress" /> 

describe('Funcionalidade: Detalhes da conta', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta/edit-account/') 
        cy.fixture('perfil').then(login => { 
     cy.login(login.usuario, login.senha) ///chamando o comando customizado de login;


        })
        

   });

 it('Deve completar detalhes da conta com sucesso', () => {
    cy.detalhesConta('Victor', 'Daniel', 'Victor.QA') ///chamando o comando customizado
    cy.get('.woocommerce-message').should('exist') ///validando se a mensagem de sucesso foi exibida
    
 });

});