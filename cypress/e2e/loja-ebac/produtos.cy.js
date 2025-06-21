///<reference types="cypress"/>
import produtosPage from '../../support/page-objects/produtos.page'

describe('Funcionalidade: Produtos', () => {

beforeEach(() => {
    produtosPage.visitarUrl()
});
   

 it('Deve selecionar um produto da lista', () => {
    produtosPage.buscarProdutoLista('Abominable Hoodie')

     cy.get('#tab-title-description > a').should('contain','Descrição')

 });

 it('Deve buscar um produto com sucesso', () => {
    let produto = 'Ingrid Running Jacket'
    produtosPage.buscarProduto(produto)
    cy.get('.product_title').should('contain',produto)
 });

it('Deve visitar a pagina do produto', () => {
    produtosPage.visitarProduto('Aero Daily Fitness Tee')
    cy.get('.product_title').should('contain','Aero Daily Fitness Tee')



 });

 it('Deve adicionar produto ao carrnho', () => { 
     produtosPage.buscarProduto('Ajax Full-Zip Sweatshirt')
     produtosPage.addProdutoCarrimho('S', 'Blue', 5) 


 });

  it.only('Deve adicionar produto ao carrnho buscando da massa de dados', () => { 
     cy.fixture('produtos').then(dados => {
     produtosPage.buscarProduto(dados[0].nomeProduto)
     produtosPage.addProdutoCarrimho(
        dados[0].tamanho, 
        dados[0].cor, 
        dados[0].quantidade) 
        cy.get('.woocommerce-message').should('exist')



    })
    



  });




});