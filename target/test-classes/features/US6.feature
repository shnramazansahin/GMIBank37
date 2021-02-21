@US6
Feature: userinfo segment
  Background: user on the application page
  Scenario Outline: login page should not be accessbile with invalid credantials
    Given user  on the login page
    When user enters valid username "<username>"
    When user enter valid password "<password>"
    And user click on the sign in button
    When user clicks on the "team 37"
    When  clicks user info button
    When user verifys options "populated info"
    And user update the firstname "<firstname>"
    And user update the lastname "<lastname>"
    And user update the email "<email>"



    Examples:
      |username|password     |firstname|lastname|email       |
      |wallstreetbets|1234As$|Newfirst|NewLast  |new@gmail.com|