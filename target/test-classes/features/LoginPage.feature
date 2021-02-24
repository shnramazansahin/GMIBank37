@Login
  Feature: Login feature
    As a user I should login

  Scenario: User should login
    Given User goes to login page
    When user enters a valid username and password
    Then User logs in