Feature: As a user going to the home page, I see home page contents

  Scenario: I see the search-engine with a feature flag
    Given I have feature flag 'search_engine'
    When I go to the 'home' page
    Then I should see the search input field
