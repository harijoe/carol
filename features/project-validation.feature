Feature: As a user, I would like to validate my project
  So that I can get quotes

  # https://quotatis.atlassian.net/browse/HIANDU-1274
  Scenario: project validation form is cleared after submit
    Given I am logged in
    And I have already filled some personal information:
      | gender | firstName | lastName |
      | Mr     | John      | Doe      |
    And I go to the 'auto-validation step 1' page
    And I select the option 'Maintenant' for field 'Début de votre projet'
    And I select the option 'Avoir un ordre de prix' for field 'Jours et Horaires de contact'
    And I click on 'Par téléphone'
    And I click on 'Envoyer'
    When I go to the 'auto-validation step 1' page
    Then I should see option 'Début de votre projet' populated with '-- Choisissez --'
