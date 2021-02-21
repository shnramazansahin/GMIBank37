@US
Feature: no login with invalid
  Background: user on the login page
  Scenario Outline: login page should not be accessbile with invalid credantials
    Given user  on the "login page"
    When user enters invalid username "<username>"
    When user enter invalid password "<password>"
    And user click on the sign in button
    And user validates the error message
    And there should be an option to reset the password
    Then there should be an option to navigate to registration page
    Examples: invalid data
      |username     |password      |
      |wrongusername|1234As$       |
      |wallstreetbets|wrongpassword|
      |wrongusername|wrongpassword |



