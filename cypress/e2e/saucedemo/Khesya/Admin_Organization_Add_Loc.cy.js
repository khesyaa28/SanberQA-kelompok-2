import log_in from "../../../support/log_init.cy.js";
const loginData = require("../../../fixtures/login/login.json");

Cypress.Commands.add("login_org_loc", (email, password) => {
  cy.visit("https://opensource-demo.orangehrmlive.com/");
  const log_main = new log_in();
  log_main.inputUsername(email);
  log_main.inputPassword(password);
  log_main.clickLogin();
  log_main.verifyDashboard();
  log_main.verifyUrl();
  cy.get(':nth-child(1) > .oxd-main-menu-item').click();
  cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click();
  cy.get('.oxd-dropdown-menu > :nth-child(2)').click();
})

describe('Organization Add Location', () => {
    it('success add location', ()=>{
        cy.login_org_loc(loginData.validUsername,loginData.validPassword);
        cy.url().should('include', 'admin/viewLocations');

        cy.get('.orangehrm-header-container > div > .oxd-button').click();
		cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('Jeju');
		cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Jeju');
		cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('East Kalimantan');
		cy.get('.oxd-select-text').click();
		cy.contains('Argentina').click();
		cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').type('089827355261');
		cy.get('.oxd-button--secondary').click();
		cy.get('.oxd-toast').should('contain','Successfully Saved');
    })
    it.only('success add location', ()=>{
        cy.login_org_loc(loginData.validUsername,loginData.validPassword);
        cy.url().should('include', 'admin/viewLocations');

        cy.get('.orangehrm-header-container > div > .oxd-button').click();
		// cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('Jeju');
		// cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Jeju');
		// cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('East Kalimantan');
		// cy.get('.oxd-select-text').click();
		// cy.contains('Argentina').click();
		// cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').type('089827355261');
		cy.get('.oxd-button--secondary').click();
		// cy.get('.oxd-toast').should('contain','Successfully Saved');
    })
})