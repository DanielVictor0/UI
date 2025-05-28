///<reference types="cypress"/>
import {faker} from '@faker-js/faker';

describe('funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/') 

    })
   it('Deve fazer cadstro com sucesso', () => {
   cy.get('#reg_email').type(faker.internet.email()) ///gerando email aleatorio
    cy.get('#reg_password').type(faker.internet.password()) ///gerando senha aleatoria
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist') ///validando se o cadastro foi realizado com sucesso
  
   cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click() ///clicando no link de editar conta
     cy.get('#account_first_name').type(faker.person.firstName()) ///gerando nome aleatorio
     cy.get('#account_last_name').type(faker.person.lastName()) ///gerando sobrenome aleatorio
     //cy.wait(5000) esperando 5 segundos para poder entender o teste
     cy.get('.woocommerce-Button').click() ///clicando no botao de salvar
     cy.get('.woocommerce-message').should('exist') ///validando se a mensagem de sucesso foi exibida
   });

   it.only('Deve completar o cadastro com sucesso - Usando variáveis', () => {
   var email = faker.internet.email() ///gerando email aleatorio
   var senha = faker.internet.password() ///gerando senha aleatoria
   var nome = faker.person.firstName() ///gerando nome aleatorio
   var sobrenome = faker.person.lastName() ///gerando sobrenome aleatorio  

   cy.get('#reg_email').type(email) 
    cy.get('#reg_password').type(senha) 
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist') 
  
   cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
     cy.get('#account_first_name').type(nome) 
     cy.get('#account_last_name').type(sobrenome) 
     cy.get('.woocommerce-Button').click() 
     cy.get('.woocommerce-message').should('exist') 
   });
    
});