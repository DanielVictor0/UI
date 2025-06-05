///<reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('funcionalidade: Login', ()  => {

    beforeEach(() => {
        cy.visit('my-account')  ///url do site
        
        
    });

       beforeEach(() => {
        
    });
    
    it('deve fazer  login com sucesso',() => {
       cy.get('#username').type('victor.teste@gmail.com') 
       cy.get('#password').type('@VICTOR123')
       cy.get('.woocommerce-form > .button').click()
       cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, victor.teste (não é victor.teste? Sair)')

    })


    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {

      cy.get('#username').type('victor.@gmail.com') 
       cy.get('#password').type('@VICTOR123')
       cy.get('.woocommerce-form > .button').click()
      //cy.get('.woocommerce-error').should('contain','Erro: O nome de usuário ou endereço de e-mail fornecido não está cadastrado neste site. Verifique seu nome de usuário e tente novamente.')
       cy.get('.woocommerce-error').should('exist')

    });


    it('Deve exibir uma mensagem de erro ao inserir senha inválido', () => { 
       cy.get('#username').type('victor.teste@gmail.com') 
       cy.get('#password').type('@VICTOR')
       cy.get('.woocommerce-form > .button').click()
       cy.get('.woocommerce-error').should('contain','A senha fornecida para o e-mail victor.teste@gmail.com está incorreta. ')
 //cy.get('.woocommerce-error').should('exist')

    });

    it('Deve fazer login com sucesso - Usando Fixture ', () => { 
         cy.fixture('perfil').then((dados) => {
         cy.get('#username').type(dados.usuario, {log: false}) //desabilitando o log do console
         cy.get('#password').type(dados.senha, {log: false})
         cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, victor.teste ')


         
          
          })

    
         })

      it.only('Deve fazer login com sucesso - Usando comando customizado', () => {
        cy.login('victor.teste@gmail.com', '@VICTOR123')
         cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, victor.teste (não é victor.teste? Sair)')



      })

});


