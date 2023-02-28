/// <reference types="cypress" />

describe("login-validations", () => {
  let data; //closure variable
  before(() => {
    cy.fixture("guarnic").then((guarnic) => {
      data = guarnic;
    });
  });
  it("login-validation", () => {
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
  
  it("sidebar validations", () => {
    cy.get(".button--cDYvD selected--2pPas").should("contain", "Home");
    cy.get(".button--3vj8-").should("contain", "Dashboards");
  });
});