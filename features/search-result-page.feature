Feature: As a user going to the result page, I see results

  Scenario: I see results according a query
    When I go to the 'search-result' page with query '?q=a'
    Then I should see 'Vos résultats de recherche pour'
    And I should see 8 search results
