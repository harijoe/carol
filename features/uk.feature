Feature: As an UK customer I can use the quotatis website

  Background:
    Given I am an english user

  Scenario: Home page
    When I go to the 'home' page
    Then I should be on a page titled 'Quote Works'
    And I should see 'What's your project?'
    And I should see 11 Key-one slides
    And I should see 12 items in the footer advices section

  Scenario: Not logged in
    When I go to the 'home' page
    Then I should see 'Log In'

  Scenario: Logged in
    Given I am logged in
    And I go to the 'home' page
    Then I should not see 'Log In'

  Scenario: Autovalidation
    Given I am logged in
    And I have already filled some personal information:
      | gender | firstName | lastName |
      | Mr     | John      | Doe      |
    When I go to the 'auto-validation step 1' page
    And I select the option 'Now' for field 'Start your project'
    And I select the option 'Price range' for field 'Your requirements'
    And I click on 'By phone'
    And I select the option 'During working hours' for field 'Day and time to be contacted'
    And I click on 'Send'
    Then I should be redirected to '/validation/phone?projectId=/projects/MOCK_PROJECT_ID'

  Scenario: Profile page
    Given I am logged in
    When I go to the 'profile' page
    Then I should see after a while 'Hello john'
