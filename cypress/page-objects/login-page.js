class loginPage{
    constructor(){
        this.url="https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
    }

    element = {
        loginEmailField: ()=> cy.get("#input-email"),
        loginPasswordField: ()=> cy.get("#input-password"),
        loginButton: ()=> cy.get("form > .btn")
    }

    visit(){
        cy.visit(this.url);
    }

    typeLoginEmail(email){
        this.element.loginEmailField().clear().type(email);
    }

    typeLoginPassword(password){
        this.element.loginPasswordField().clear().type(password);
    }

    clickLoginButton(){
        this.element.loginButton().click();
    }

    loginUser(email,password){
        this.typeLoginEmail(email);
        this.typeLoginPassword(password);
        this.clickLoginButton();
    }

}

module.exports = new loginPage();