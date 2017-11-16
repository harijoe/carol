Feature: As a user I should be able to read a pro's user reviews

  Scenario: Project reviews
    Given I am logged in
    And I go to the 'found project' page
    When I click on 'SARL ALU EXTENSION'
    Then I should see 'Avis'
    And I should see:
      | Jack D.                 |
      | c'est la review de jack |
