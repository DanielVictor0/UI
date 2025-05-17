///<reference types="cypress"/>

describe('funcionalidade: Login', ()  => {
   
    it('deve fazer  login com sucesso',() => {
       cy.visit('http://lojaebac.ebaconline.art.br/my-account/') 
       cy.get('#username').type('victor.teste@gmail.com') 
       cy.get('#password').type('@VICTOR123')
       cy.get('.woocommerce-form > .button').click()

       cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, victor.teste (não é victor.teste? Sair)')
     

       


    })

})

