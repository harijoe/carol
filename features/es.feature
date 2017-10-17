Feature: As a spanish customer I can use the quotatis website

  Background:
    Given I am a spanish user

  Scenario: Home page
    When I go to the 'home' page
    Then I should be on a page titled 'Presupuestos de reforma'
    And I should see '¿Cuál es tu proyecto?'
    And I should see 11 Key-one slides
    And I should see 9 items in the footer advices section

  Scenario: Not logged in
    When I go to the 'home' page
    Then I should see 'Entrar'

  Scenario: Logged in
    Given I am logged in
    And I go to the 'home' page
    Then I should not see 'Entrar'

  Scenario: Autovalidation
    Given I am logged in
    And I have already filled some personal information:
      | gender | firstName | lastName |
      | Mr     | Miguel    | Ángel    |
    When I go to the 'auto-validation step 1' page
    And I select the option 'Ahora' for field 'Empieza tu proyecto'
    And I select the option 'Tener una idea del precio del proyecto' for field 'Tus necesidades'
    And I click on 'Por teléfono'
    And I select the option 'Mañana (9:00 - 14:00)' for field 'Horario de contacto'
    And I click on 'Enviar'
    Then I should be redirected to '/validation/phone?projectId=/projects/MOCK_PROJECT_ID'

  Scenario: Profile page
    Given I am logged in
    And I have already filled some personal information:
      | gender | firstName | lastName |
      | Mr     | Miguel    | Ángel    |
    When I go to the 'profile' page
    Then I should see after a while 'Hola Miguel'
