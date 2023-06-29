Feature: UI testing - LambdaTest web page

    Scenario: Verify that the image of a product displayed

    Given I am on the Home page 
    When I click on a intem in the home page
    Then The product details view show
    And The product image is shown

    Scenario: Add an item to the wishlist

    Given I am on the login page
    When I enter my username as "ab@endava.com"
    And I enter my password as "Hola123#"
    And I click the login button
    And I go to the home page
    And I choose a product for my wishlist
    And I click on "Add to my wish list"
    And go to the wish list of my account 
    Then The the product must be in the wish list of my account

    Scenario: Empty the shopping cart

    Given I have one product on my shopping cart
    When I go to my shopping cart
    And I delete the product that is in my shopping cart
    Then Product is no longer in my shopping cart 
    And a message is displayed saying "Your shopping cart is empty!"

    Scenario: Try to purchase without filling all the fields

    Given I select a product to purchase
    And  I go to the login page
    When I enter my username as "ab@endava.com"
    And I enter my password as "Hola123#"
    And I click to add the product to my shopping cart
    And I click to proceed to checkout
    And I fill the name field as "Alejo"
    And I fill the last name field as "Beltran"
    And i fill the address field as "calle 12"
    And I click on continue
    Then A message is displayed saying "Warning: You must agree to the Terms & Conditions!"

    Scenario: An iMac has to be Apple brand
    Given I am on the homw page
    When I click on an iMac
    Then The tittle of the product has to be "iMac"
    And The brand of the product has to be "Apple"