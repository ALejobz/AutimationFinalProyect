class checkoutPage{

    constructor(){
        this.warningMessage="Warning: You must agree to the Terms & Conditions!"
    }
    element = {
        checoutkNameField: ()=> cy.get("#input-payment-firstname"),
        checoutkLastNameField: ()=> cy.get("#input-payment-lastname"),
        checoutkAddressField: ()=> cy.get("#input-payment-address-1"),
        checkoutCityField: ()=> cy.get("#input-payment-city"),
        checkoutPostalField: ()=> cy.get("#input-payment-postcode"),
        termsConsitions: ()=> cy.get('[class="custom-control-label"]').eq(0),
        continueButton: ()=> cy.get("#button-save"),
        homeButton: ()=> cy.get(".title").contains("Home"),
        checkoutAllert: ()=> cy.get('#form-checkout > .alert')
    }

    typechecoutkNameField(name){
        this.element.checoutkNameField().clear().type(name);
    }

    typechecoutkLastNameField(lastname){
        this.element.checoutkLastNameField().clear().type(lastname);
    }

    typechecoutkAddressField(address){
        this.element.checoutkAddressField().clear().type(address);
    }

    typechecoutkCityField(city){
        this.element.checkoutCityField().clear().type(city);
    }

    typechecoutkPostalField(postal){
        this.element.checkoutPostalField().clear().type(postal);
    }

    clickTermsConditions(){
        this.element.termsConsitions().click()
    }

    clickContinue(){
        this.element.continueButton().click()
    }

    scroll(){
        this.element.termsConsitions().scrollIntoView()
    }

    verifyMessage(warning){
        this.element.checkoutAllert().should("be.visible").should("contain.text",warning);
    }

    verifyWarningMessage(){
        this.verifyMessage(this.warningMessage)
    }

    completePurchase(name,lastname,address){
        this.typechecoutkNameField(name)
        this.typechecoutkLastNameField(lastname)
        this.typechecoutkAddressField(address)
        this.clickTermsConditions()
        this.clickContinue()
    }
    
}
module.exports = new checkoutPage();