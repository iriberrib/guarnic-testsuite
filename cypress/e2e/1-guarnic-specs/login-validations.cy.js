/// <reference types="cypress" />

describe("login-validations", () => {
  let data; //closure variable
  before(() => {
    cy.fixture("guarnic").then((guarnic) => {
      data = guarnic;
    });
  });
  it("login happy path", () => {
    cy.visit(data.url);
    cy.url().should('eq', 'https://guarnic-staging.web.app/')
    cy.wait(10000);
    cy.get(".m-bottom-7").contains("SIGN IN TO WORKLION");
    cy.get("#basic_email").type(data.admin.email);
    cy.get("#basic_password").type(data.admin.password);
    cy.get(".ant-form-item-control-input-content > .ant-btn").click();
    cy.wait(10000);
    cy.get(".title--38LD2").should("contain", data.title);
  });

  it("sidebar validations", () => {
    cy.get(".button--cDYvD selected--2pPas").should("contain", "Home");
    cy.get(".button--3vj8-").should("contain", "Dashboards");
  });
});