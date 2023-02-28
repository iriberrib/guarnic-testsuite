/// <reference types="cypress" />

describe("Login form complete test", () => {
  let data; //closure variable
  before(() => {
    cy.fixture("guarnic").then((guarnic) => {
      data = guarnic;
      cy.visit(guarnic.url)
    });
  });

  it('Login form can be opened', () => {
    //check the floating card
    cy.get('.floatingCard--1IzXg').should(be.visible);
    //check the texts
    cy.contains('SIGN IN TO WORKLION');
    cy.contains('Email');
    cy.contains('Password');
    //check te buttons
    cy.get('.ant-btn socialOption--16Wai').should(be.visible); //llevan el mismo class name
    
    
  })
});
