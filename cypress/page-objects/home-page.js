class homePage{

    constructor(){
        this.url = "https://ecommerce-playground.lambdatest.io/"
        this.iMacName="iMac"
        this.brand="Apple"
    }
    element = {
        homeButton: ()=> cy.get(".title").contains("Home"),
        productButton1: ()=>cy.get('#entry_213245 > .d-block > .hover-effect'),
        productImg: ()=> cy.get('#image-gallery-216811 > div.image-thumb.d-flex > a > img'),
        productButton2: ()=> cy.get('#mz-product-listing-image-37213259-0-0 > .carousel-inner > .active > .lazy-load'),
        addCartButton: ()=> cy.get("[title='Add to Cart']").eq(0),
        addWishListButton: ()=> cy.get("[title='Add to Wish List']").eq(1),
        wishListButton: ()=> cy.get("[aria-label='Wishlist']").eq(0),
        prodInWishList: ()=> cy.get("#content > div.table-responsive > table > thead > tr > th:nth-child(2)"),
        cartButton: ()=> cy.get(".form-row > :nth-child(1) > .btn"),
        checkoutButton: ()=> cy.get(".form-row > :nth-child(2) > .btn"),
        iMacButton: ()=> cy.get("#mz-product-listing-image-37213259-0-0 > .carousel-inner > .active > .lazy-load"),
        iMacTittle: ()=> cy.get("#entry_216816 > h1"),
        appleBrand: ()=> cy.get('.list-unstyled > :nth-child(1) > a')
    }

    visit(){
        cy.visit(this.url);
    }

    verifyHomePageLoads(){
        this.element.homeButton().should("be.visible")
    }

    clickHomeButton(){
        this.element.homeButton().click()
    }

    selectProduct1(){
        this.element.productButton1().click()
    }

    selectProduct2(){
        this.element.productButton2().click()
    }

    verifyImageAppears(){
        this.element.productImg().should("be.visible")
    }

    addToCart(){
        this.element.addCartButton().click()
    }

    addWishLIst(){
        cy.get(".product-action").should('have.class', 'product-action').invoke('removeClass', 'product-action');
        this.element.addWishListButton().click()
    }

    clickOnWishList(){
        this.element.wishListButton().click()
    }

    verifyProductInWishList(){
        this.element.prodInWishList().should("be.visible")
    }

    addProdCart(){
        cy.get(".product-action").should('have.class', 'product-action').invoke('removeClass', 'product-action');
        this.element.addCartButton().click()
    }

    clickOnCart(){
        this.element.cartButton().click()
    }

    clickCheckoutButton(){
        this.element.checkoutButton().click()
    }

    clickOniMac(){
        this.element.iMacButton().click()
    }

    verifyItemTittle(tittle){
        this.element.iMacTittle().should("be.visible").should("contain.text",tittle);
    }

    verifyItemTitle(){
        this.verifyItemTittle(this.iMacName)
    }

    verifyBrandTittle(brand){
        this.element.appleBrand().should("be.visible").should("contain.text",brand);
    }

    verifyItemBrand(){
        this.verifyBrandTittle(this.brand)
    }



    
}
module.exports = new homePage();