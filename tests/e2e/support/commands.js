// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Add command to visit home
Cypress.Commands.add("visitHome", () => cy.visit("/"));

// Add command to visit login
Cypress.Commands.add("visitLogin", () => cy.visit("/login"));

// Add command to click an element
Cypress.Commands.add("clickButton", btnId => cy.get(`button#${btnId}`).click());

// Should be on an Url
Cypress.Commands.add("shouldBeOnUrl", url => cy.url().should("include", url));
