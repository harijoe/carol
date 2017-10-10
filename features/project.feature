Feature: As a user I want to see the details of my project

  Scenario: Project page
    Given I am logged in
    When I go to the 'validated project' page
    Then I should see 'Résumé de votre demande de projet'

