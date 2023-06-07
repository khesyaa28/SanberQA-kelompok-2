import log_in from "../../support/log_init.cy.js";

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
