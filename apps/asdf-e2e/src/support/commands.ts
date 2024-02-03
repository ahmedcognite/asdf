/// <reference types="cypress" />

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    login(username: string, password: string): void;
  }
}

// -- This is a parent command --
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/login');

  cy.get('input[name="username"]').clear();
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').clear();
  cy.get('input[name="password"]').type(password);

  cy.intercept('POST', 'https://dummyjson.com/auth/login').as('loginRequest');
  cy.get('button[type="submit"]').click();

  cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);

  cy.url().should('eq', 'http://localhost:4200/');
});
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
