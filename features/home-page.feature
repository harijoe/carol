Feature: As a customer going to the home page
  I would like to see home page contents

  Scenario: Home page
    Given I go to the home page
    Then I should be on 'Devis Travaux - Trouver le bon artisan avec Quotatis : comparez les devis et réalisez vos travaux'
    And I should see 'Quels travaux souhaitez-vous faire ?'
    And I should see 11 Key-one slides
