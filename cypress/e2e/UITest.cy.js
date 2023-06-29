const homePage = require("../../cypress/page-objects/home-page")
const cartPage = require("../page-objects/cart-page")
const loginPage = require("../page-objects/login-page")
const checkoutPage = require("../page-objects/checkout-page")

describe('UI testing - LambdaTest web page', () => {
  it('Verify that when you select a product it shows the image', () => {
    homePage.visit()
    homePage.verifyHomePageLoads()
    homePage.selectProduct1()
    homePage.verifyImageAppears()
  })

  it('Verify that when I put an item in the wishlist it is in the wishlist.', () => {
      loginPage.visit();
      cy.fixture('loginTSData').then((data)=>{
          cy.intercept(data.tc1_loginsuccessfull.method, data.tc1_loginsuccessfull.endpoint).as("afterLogin")
          loginPage.loginUser(data.tc1_loginsuccessfull.email, data.tc1_loginsuccessfull.password)
      })
      homePage.clickHomeButton()
      homePage.addWishLIst()
      homePage.clickOnWishList()
      homePage.verifyProductInWishList()
    })

    it('Try to empty the shopping cart', () => {
      homePage.visit()
      homePage.addProdCart()
      homePage.clickOnCart()
      cartPage.clickEraseItem()
      cartPage.verifyNoitemMessage()
    })

    it('Try to purchase an item without filling all the fields', () => {
      loginPage.visit();
      cy.fixture('loginTSData').then((data)=>{
          cy.intercept(data.tc1_loginsuccessfull.method, data.tc1_loginsuccessfull.endpoint).as("afterLogin")
          loginPage.loginUser(data.tc1_loginsuccessfull.email, data.tc1_loginsuccessfull.password)
      })
      homePage.clickHomeButton()
      homePage.addProdCart()
      homePage.clickCheckoutButton()
      cy.fixture('loginTSData').then((data)=>{
        checkoutPage.completePurchase(data.tc2_purchase.name, data.tc2_purchase.lastname, data.tc2_purchase.address)
      })
      checkoutPage.verifyWarningMessage()

    })

    it('Verify that if we try to purchase an imac the brand is aplle', () => {
      homePage.visit()
      homePage.clickOniMac()
      homePage.verifyItemTitle()
      homePage.verifyItemBrand()
    })
})