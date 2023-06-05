class log_in{
    Username=":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
    Password=":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input";
    btn_login=".oxd-button";
    h_dash=".oxd-topbar-header-title";

    inputUsername(username) {
    cy.get(this.Username).type(username);
    }
    inputPassword(password) {
        cy.get(this.Password).type(password);
    }
    clickLogin() {
        cy.get(this.btn_login, { timeout: 1000 }).click();
    }
    verifyDashboard() {
        cy.contains("Dashboard");
        cy.get(this.h_dash).should("be.visible");
    }
    verifyUrl(){
        cy.url().should('include', '/dashboard/index')
    }
}
export default log_in;

 