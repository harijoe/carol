Feature: As a logged in user going to the auto validation tunnel, I see step one content

  Scenario Outline: Get the user information if required
    Given I am logged in
    And I have already filled some personal information:
      | gender   | firstName   | lastName   |
      | <gender> | <firstName> | <lastName> |
    When I go to the 'auto-validation step 1' page
    Then I should see 'Vos informations'
    Examples:
      | gender | firstName | lastName |
      |        |           |          |
      |        | John      |          |
      |        |           | Doe      |
      |        | John      | Doe      |
      | Mr     |           |          |

  Scenario: User information is already set
    Given I am logged in
    And I have already filled some personal information:
      | gender | firstName | lastName |
      | Mr     | John      | Doe      |
    When I go to the 'auto-validation step 1' page
    Then I should not see 'Vos informations'

  Scenario: Validation errors on submit
    Given I am logged in
    And I have already filled some personal information:
      | gender | firstName | lastName |
      | Mr     | John      | Doe      |
    When I go to the 'auto-validation step 1' page
    And I click on 'Envoyer'
    Then I should see 'Champ requis' 2 times

  # https://quotatis.atlassian.net/browse/HIANDU-1274
  Scenario: Project validation form is cleared after submit
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
