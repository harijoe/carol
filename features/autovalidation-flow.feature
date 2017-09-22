Feature: As a logged in user going to the auto validation tunnel, I can go through it

  Scenario: Validating step 1 redirects to step 2 (phone)
    Given I am logged in
    And I have already filled some personal information:
      | gender | firstName | lastName |
      | Mr     | John      | Doe      |
    When I go to the 'auto-validation step 1' page
    And I select the option 'Maintenant' for field 'Début de votre projet'
    And I select the option 'Avoir un ordre de prix' for field 'Votre besoin'
    And I click on 'Par téléphone'
    And I select the option 'Pendant les heures de bureau' for field 'Jours et Horaires de contact'
    And I click on 'Envoyer'
    Then I should be redirected to '/validation/phone?projectId=/projects/MOCK_PROJECT_ID'

  Scenario: Validating step 2 redirects to step 3 (email)
    Given I am logged in
    And my current project already has informations
    When I go to the 'auto-validation step 2' page
    And I fill 'Téléphone mobile' with '0606060606'
    And I click on 'Envoyer'
    And I wait until I see 'Saisissez le code à 6 chiffres'
    And I fill 'Code de confirmation' with '123456'
    Then I should be redirected to '/validation/email?projectId=/projects/MOCK_PROJECT_ID'

  Scenario: Going to Step 2 with not validated email resend an email
    Given I am logged in
    And my current project already has informations
    And my phone is validated
    When I go to the 'auto-validation step 3' page
    Then I should see a notification with title 'Merci !'

  Scenario: Validating email redirects to project validated page
    Given I am logged in
    And my current project already has informations
    And my phone is validated
    When I go to the 'email validation' page with query '?token=VALID_TOKEN&origin=validation-page'
    Then I should be redirected to '/project-validation'
