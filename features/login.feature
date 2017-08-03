Feature: As a logged in user, I see that I am logged in

  Scenario: Logged in
    Given I am logged in
    And I go to the 'home' page
    Then I should not see 'Se connecter'

  Scenario: Not logged in
    When I go to the 'home' page
    Then I should see 'Se connecter'

  Scenario: Connect popin
    When I go to the 'home' page
    And I click on 'Se connecter'
    Then I should see a popin
