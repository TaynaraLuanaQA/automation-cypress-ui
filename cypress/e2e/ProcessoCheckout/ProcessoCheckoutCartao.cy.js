/*Dado que o usuário tenha acesso a plataforma, com suas credenciais e ele seleciona 
um produto através de uma pesquisa fornecida, ao selecionar o produto e suas caracteristicas
deve ser possível alterar o estoque, (quantidade por item), escolher cor, tamanho, e deve ser
possível enviar o item ao carrinho e finalizar o processo de compra utilizando cartao de credito
*/
import {cadastraNovoUsuario} from '../../support/FuncoesGenericas/FuncoesGenericas'
describe("Suíte de testes - Fluxo de checkout com sucesso utilizando cartão de crédito.", ()=>{

    let pegaUsuarioCadastrado;

    beforeEach(()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.visit(Cypress.config('baseUrl'));
    })

    it("CE01:Cadastrando novo usuário...", ()=>{
        cy.contains('Create an Account').should('be.visible').click();
        cy.contains('Create New Customer Account').should('be.visible');
        cy.contains('Personal Information').should('be.visible');

        //Preencher dados formulário
        pegaUsuarioCadastrado = cadastraNovoUsuario();
    })

    it("CE02: Realizando Login na plataforma com usuário cadastrado...", ()=>{
        cy.log('Chegou aqui...')
        cy.contains('Sign In').should('be.visible').click();

        cy.get('#email', {timeout:10000}).click().type(pegaUsuarioCadastrado.email);
        cy.get('#pass').click().type(pegaUsuarioCadastrado.senha);
        cy.get('#send2').click();
    })
})
