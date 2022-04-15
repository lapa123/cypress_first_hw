/// <reference types="cypress" />
describe('My first test', () => {
  it('should', () => {
    cy.visit('https://react-redux.realworld.io')
    cy.contains('Sign in')
    .click();
    cy.url()
    .should('include', '/login');
    cy.get(':nth-child(1) > .form-control')
    .type('email123@bigmir.net');
    cy.get(':nth-child(2) > .form-control')
    .type('batman911');
    cy.contains('.btn', 'Sign in')
    .click();
    cy.get(':nth-child(4) > .nav-link')
    .should('contain','tanya12');
    

  

  
  });
});
