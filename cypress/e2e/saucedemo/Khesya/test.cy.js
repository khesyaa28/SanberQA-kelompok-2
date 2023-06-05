import log_in from "../../../support/log_init.cy.js";
const loginData = require("../../../fixtures/login/login.json");

Cypress.Commands.add("login_umg", (email, password) => {
  cy.visit("https://opensource-demo.orangehrmlive.com/");
  const log_main = new log_in();
  log_main.inputUsername(email);
  log_main.inputPassword(password);
  log_main.clickLogin();
  log_main.verifyDashboard();
  log_main.verifyUrl();
  cy.get(':nth-child(1) > .oxd-main-menu-item').click()
})

Cypress.Commands.add("setAdm", (num, role) => {
  cy.get(`.oxd-select-dropdown > :nth-child(${num})`).click()
    cy.get(`:nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input`).should('have.text',`${role}`)
})
Cypress.Commands.add("setStat", (num, status) => {
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text .oxd-select-text-input').should('have.text',`${status}`)
})
describe('orageHRM testing', () => {
  it('success edit USERNAME by search',() => {
    cy.login_umg(loginData.validUsername,loginData.validPassword)


    cy.get(":nth-child(2) > .oxd-input").type("abcd2");
		cy.get(".oxd-form-actions > .oxd-button--secondary").should("be.visible").eq(0).click({ force: true });
		cy.get(".oxd-table-cell-actions > :nth-child(2) > .oxd-icon").eq(1).click({force: true});
		cy.get(":nth-child(2) > .oxd-input").clear().type("abCCd2");
		cy.get(".oxd-button--secondary").click();
		cy.get(".oxd-text--toast-message").should("contain", "Successfully Updated");
  })
  it.only('success edit ROLE by search',() => {
    cy.login_umg(loginData.validUsername,loginData.validPassword)

    cy.get(":nth-child(2) > .oxd-input").type("Anaya40");
		cy.get(".oxd-form-actions > .oxd-button--secondary").should("be.visible").eq(0).click({ force: true });
		cy.get(".oxd-table-cell-actions > :nth-child(2) > .oxd-icon").eq(1).click({force: true});
	
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.setAdm('3','ESS') //set 2 for admin and 3 for ESS

		cy.get(".oxd-button--secondary").click();
		cy.get(".oxd-text--toast-message").should("contain", "Successfully Updated");
   
    
  })
  it('success edit STATUS by search',() => {
    cy.login_umg(loginData.validUsername,loginData.validPassword)

    cy.get(":nth-child(2) > .oxd-input").type("Anaya40");
		cy.get(".oxd-form-actions > .oxd-button--secondary").should("be.visible").eq(0).click({ force: true });
		cy.get(".oxd-table-cell-actions > :nth-child(2) > .oxd-icon").eq(1).click({force: true});

    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.setStat('2','Enabled') //set 2 for enable and 3 for disable

		cy.get(".oxd-button--secondary").click();
		cy.get(".oxd-text--toast-message").should("contain", "Successfully Updated");
})
it('success edit PASS by search',() => {
  cy.login_umg(loginData.validUsername,loginData.validPassword)

  cy.get(":nth-child(2) > .oxd-input").type("Kiyara.Hu");
  cy.get(".oxd-form-actions > .oxd-button--secondary").should("be.visible").eq(0).click({ force: true });
  cy.get(".oxd-table-cell-actions > :nth-child(2) > .oxd-icon").eq(1).click({force: true});

  cy.get(".oxd-checkbox-input > .oxd-icon").click();
	cy.get(".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input").type("cobaganti1");
	cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("cobaganti1");

  cy.get(".oxd-button--secondary").click();
  cy.get(".oxd-text--toast-message").should("contain", "Successfully Updated");
})
it('failed edit PASS by search',() => {
  cy.login_umg(loginData.validUsername,loginData.validPassword)

  cy.get(":nth-child(2) > .oxd-input").type("Abcd1");
  cy.get(".oxd-form-actions > .oxd-button--secondary").should("be.visible").eq(0).click({ force: true });
  cy.get(".oxd-table-cell-actions > :nth-child(2) > .oxd-icon").eq(1).click({force: true});
  
  cy.get(".oxd-checkbox-input > .oxd-icon").click();
	cy.get(".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input").type("cobaganti1");
	cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("cobaganti2");

  cy.get(".oxd-button--secondary").click();
  cy.get(".oxd-input-group > .oxd-text").should("contain", "Passwords do not match");
})


})