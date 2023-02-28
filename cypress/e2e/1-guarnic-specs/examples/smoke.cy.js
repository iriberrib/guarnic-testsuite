/// <reference types="cypress" />

let data; //closure variable
before(() => {
  cy.fixture("guarnic").then((guarnic) => {
    data = guarnic;
  });
}); 

beforeEach(() => {
  cy.visit(data.url);
});

describe("Guarnic smoke test", () => {
  it("login form can be opened", () => {
    cy.contains("SIGN IN TO WORKLION");
    cy.contains("Email");
    cy.contains("Password");
    cy.contains("Forgot Password?");
  });

  it("user login happy path", () => {
    cy.wait(2000).then((formAppears) => {
      cy.get("#basic_email").type(data.admin.email);
      cy.get("#basic_password").type(data.admin.password);
      cy.get(".ant-form-item-control-input-content > .ant-btn")
        .click()
        .then((loginSuccess) => {
          cy.wait(5000);
          cy.contains("Home");
        });
    });
  });

  it("Login succesful", () => {
    cy.contains('Home');
  })
});
