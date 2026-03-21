
@login @regression
Feature: Login page testcases


Background: Background logic 
  Given I goto login page "https://playground.bsparksoftwaretechnologies.com/login"

  # @regression
  # Scenario: Login with Valid userDetails
  #   When I enter username "jhon1@gmail.com" and Password "test@123"
  #   And I Click login button
  #   Then I Validate home page title "Dashboard"

  # @regression @smoke
  # Scenario: Login with InValid password only
  #   When I enter username "jhon1@gmail.com" and Password "xyz@123"
  #   And I Click login button
  #   Then I Validate error message "Invalid email or password"

  # @regression @smoke
  # Scenario: Login with InValid email only
  #   When I enter username "rkgrekgj@gmail.com" and Password "test@123"
  #   And I Click login button
  #   Then I Validate error message "Invalid email or password"

  # @regression @smoke
  # Scenario: Login with InValid email and password
  #   When I enter username "ekrgjeg@gmail.com" and Password "vfghrbgf"
  #   And I Click login button
  #   Then I Validate error message "Invalid email or password"

  @regression @smoke @datadriven
  Scenario Outline: Login with multiple invalid testdata
     When I enter username "<EmailId>" and Password "<Password>"
     And I Click login button
     Then I Validate error message "<ExpectedErrorMessage>"
  Examples: 
     |EmailId|Password|ExpectedErrorMessage|
     |jhon1@gmail.com|test@345446|Invalid email or password|
     |abc@gmail.com  |test@123   |Invalid email or password|
     |abc@gmail.com  |test@123   |Invalid email or password|
