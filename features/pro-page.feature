Feature: As a user I want to see the details of a pro on my projects

  Scenario: Project page
    Given I am logged in
    And I go to the 'found project' page
    When I click on 'SARL ALU EXTENSION'
    Then I should see after a while 'MOCK_SIRET'

