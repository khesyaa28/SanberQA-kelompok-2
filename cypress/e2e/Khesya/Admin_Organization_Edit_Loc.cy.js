import log_in from "../../support/log_init.cy.js";
const loginData = require("../../fixtures/login/login.json");

Cypress.Commands.add("edit_org_loc", (email, password) => {
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

describe('Organization Edit Location', () => {
    it('success edit location', ()=>{
      cy.edit_org_loc(loginData.validUsername,loginData.validPassword);
      cy.url().should('include', 'admin/viewLocations');

      cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)').click({force:true}); // click Edit 
		  cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
      cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Vancouver');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('442');

		  cy.get('.oxd-button--secondary').click();
		  cy.get('.oxd-toast').should('contain','Successfully Updated');
    })
    it('failed edit location', ()=>{
      cy.edit_org_loc(loginData.validUsername,loginData.validPassword);
      cy.url().should('include', 'admin/viewLocations');

      cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)').click({force:true}); // click Edit   
		  cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear();

		  cy.get('.oxd-button--secondary').click();
		  cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > .oxd-text').should('contain','Required');
    })
})