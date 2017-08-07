Feature: As a user, I can interact with the chatbot

  Scenario: Click on key 1 on homepage
    When I go to the 'home' page
    And I start a conversation with the first key-one slide
    Then I should be redirected to '/project-elaboration'
    And I should see 'Bonjour, quel type de travaux souhaitez-vous faire ?'
    And I should see 'Fenêtres et ouvertures extérieures'
    And I should see after a while 'C'est parti ! Quel est votre projet ?'
    And I should see 8 quick replies
    And I should see the back button

  Scenario: Reach project summary
    Given I reached the project summary in my conversation
    When I go to the 'chatbot' page
    Then I should see 'Valider mon projet'

  Scenario: Validate project on summary as logged in user
    Given I am logged in
    And I reached the project summary in my conversation
    When I go to the 'chatbot' page
    And I click on 'Valider mon projet'
    Then I should be redirected to '/projects/MOCK_PROJECT_ID/account'

  Scenario: Login on chatbot popin
    Given I reached the project summary in my conversation
    When I go to the 'chatbot' page
    And I click on 'Valider mon projet'
    And I fill 'email' with 'hello@world.com'
    And I fill 'password' with 'myp4$$w0rld'
    And I click on 'Connexion'
    Then I should be redirected to '/projects/MOCK_PROJECT_ID/account'
    And I should not see 'Se connecter'
    
  Scenario: Signup on chatbot popin
    Given I reached the project summary in my conversation
    When I go to the 'chatbot' page
    And I click on 'Valider mon projet'
    And I click on 'Inscription'
    And I fill 'gender' with 'Mr'
    And I fill 'firstName' with 'John'
    And I fill 'lastName' with 'Doe'
    And I fill 'email' with 'hello@world.com'
    And I fill 'password' with 'myp4$$w0rld'
    And I click on 'S'inscrire'
    Then I should be redirected to '/projects/MOCK_PROJECT_ID/account'
