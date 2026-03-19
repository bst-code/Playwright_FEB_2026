Feature: Login page testcases

  Scenario: Login with Valid userDetails
    Given I open browser
    And I goto login page "https://playground.bsparksoftwaretechnologies.com/login"
    When I enter username "jhon1@gmail.com" and Password "test@123"
    And I Click login button
    Then I Validate home page title "Dashboard"

  Scenario: Login with InValid userDetails
    Given I open browser
    And I goto login page "https://playground.bsparksoftwaretechnologies.com/login"
    When I enter username "xyz@gmail.com" and Password "xyz@123"
    And I Click login button
    Then I Validate error message "Invalid email or password"
