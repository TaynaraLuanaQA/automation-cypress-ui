import SELETOR from "../../support/ProcessoLogin/seletoresLogin";
import {faker} from '@faker-js/faker'

describe("Suíte de testes - Fluxo de checkout com sucesso utilizando cartão de crédito.", () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
  });
    cy.visit(Cypress.config("baseUrl"));
  });

  // Cenário 2: Adicionar produto ao carrinho e finalizar compra
  it("CE01: Quando o usuário adiciona um produto ao carrinho e preenche os dados de pagamento, então deve finalizar a compra com sucesso.", () => {
    cy.get(SELETOR.campoPesquisa).type("Radiant Tee{enter}");
    cy.get('.wrapper > .products').contains("Radiant Tee").should("be.visible").first().click();
    
    // Escolher características do produto
    cy.get('[data-option-label="Blue"]').click();
    cy.get('[data-option-label="M"]').click();
   /*cy.get(SELETOR.opcaoTamanho).select("M");
    cy.get(SELETOR.botaoAdicionarCarrinho).click();
    cy.contains("You added Camisa Branca to your shopping cart").should("be.visible");

    // Finalizar compra
    cy.get(SELETOR.botaoCarrinho).click();
    cy.get(SELETOR.botaoFinalizarCompra).click();
   cy.preencherDadosPagamentoCartao({
      numero: "4111111111111111",
      validade: "12/26",
      cvv: "123",
    });
    cy.get(SELETOR.botaoConfirmarCompra).click();
    cy.contains("Thank you for your purchase!").should("be.visible");*/
  });
});
