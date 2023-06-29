class cartPage{

    constructor(){
        this.noItemsMessage = "Your shopping cart is empty!"
    }
    element = {
        eraseItem: ()=> cy.get("#content > form > div > table > tbody > tr > td:nth-child(4) > div > div > button.btn.btn-danger"),
        noItem: ()=> cy.get("#content > p")
    }

    clickEraseItem(){
        this.element.eraseItem().click()
    }

    verifyMessage(message){
        this.element.noItem().should("be.visible").should("contain.text",message);
    }

    verifyNoitemMessage(){
        this.verifyMessage(this.noItemsMessage);
    }

    verifyImageAppears(){
        this.element.productImg().should("be.visible")
    }

    
}
module.exports = new cartPage();