import SELETOR from "../ProcessoLogin/seletoresLogin";
import {faker} from '@faker-js/faker'

function cadastraNovoUsuario() {
    const nome = faker.person.firstName();
    const ultimoNome = faker.person.lastName();
    const email = faker.internet.email();
    const senha = "123123!@$Teste";
  
    cy.get(SELETOR.campoNome).type(nome);
    cy.get(SELETOR.campoUltimoNome).type(ultimoNome);
    cy.get(SELETOR.campoEmail).type(email);
    cy.get(SELETOR.campoSenha).type(senha);
    cy.get(SELETOR.campoConfirmaSenha).type(senha);
    cy.get(SELETOR.botaoCadastrar).click();
  
    return { email, senha };
  }
  
  export { cadastraNovoUsuario };
  
