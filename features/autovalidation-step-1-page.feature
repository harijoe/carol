Feature: As a logged in user going to the auto validation tunnel
  I see step one content

  Scenario Outline: Get the user information if required
    Given I am logged in
    And I have already filled some personal information:
      | gender   | firstName   | lastName   |
      | <gender> | <firstName> | <lastName> |
    When I go to the auto-validation step 1 page
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
    When I go to the auto-validation step 1 page
    Then I should not see 'Vos informations'

