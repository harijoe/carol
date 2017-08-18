Feature: As a user, I can manage my profile

  Scenario: Profile page
    Given I am logged in
    When I go to the 'profile' page
    Then I should see after a while 'Bonjour john'

  Scenario: Update profile
    Given I am logged in
    And I go to the 'profile' page
    When I click on 'Mr'
    And I fill 'Jour' with '03'
    And I select the option 'Avril' for field 'Mois'
    And I fill 'Année' with '1990'
    And I click on 'Mettre à jour'
    Then I should see a notification with title 'Merci !'
