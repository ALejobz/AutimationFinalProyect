Feature: API testing with pokeapi 

    Scenario: Verify that charizard have the 'Blaze' ability
    Given I am on the charizard information
    When I want to see the charizard's abilities
    Then I see that the first ability of charizard is "Blaze"

    Scenario: Charizard have the same type as charmander
    Given I want to se if charizard is the same type as charmander
    When I search the type of charizard 
    And I search the type of charmander
    Then I see that charmander and charizard are the same type

    Scenario: Charizar has more base stats than pikachu
    Given I want to see if charizar has more base stats than pikachu
    When I Search the charizard bae stats
    And I search the pikachu base stats
    Then I see that charizard have more base stats than pikachu