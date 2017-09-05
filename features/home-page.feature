Feature: As a user going to the home page, I see home page contents

  Scenario: Home page fr
    Given I go to the 'home' page
    Then I should be on a page titled 'Devis Travaux - Trouver le bon artisan avec Quotatis : comparez les devis et réalisez vos travaux'
    And I should see 'Quels travaux souhaitez-vous faire ?'
    And I should see 11 Key-one slides
    And I should see 11 items in the footer advices section

  Scenario: Home page en
    Given I am an english user
    And I go to the 'home' page
    Then I should be on a page titled 'Quote Works'
    And I should see 'What's your project?'
    And I should see 11 Key-one slides
    And I should see 8 items in the footer advices section
