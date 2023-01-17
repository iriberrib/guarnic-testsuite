/// <reference types="cypress" />

let data; //closure variable
before(() => {
  cy.fixture("guarnic").then((guarnic) => {
    data = guarnic;
  });
  cy.visit("https://guarnic-staging.web.app/");
});

describe("guarnic smoke test", () => {
  it("login", () => {
    cy.get("#basic_email").type(data.admin.email);
    cy.get("#basic_password").type(data.admin.password);
    cy.get(".ant-form-item-control-input-content > .ant-btn")
      .click()
      .then((afterLogin) => {
        cy.wait(5000);
        cy.get(".content--2i8zZ").should("be.visible");
        cy.get(".title--38LD2").contains("Home");
      });
  });
});
