Feature: As a logged in user, I see my projects

  Scenario: Project page
    Given I am logged in
    And I go to the 'my projects' page
    Then I should see 4 projects
