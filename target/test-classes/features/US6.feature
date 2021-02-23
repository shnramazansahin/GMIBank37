 Feature: userinfo segment
  Background: user on the application page
  @US6
  Scenario Outline: login page should not be accessbile in English with invalid credantials
    Given user  on the login page
    When user enters valid username "<username>"
    When user enter valid password "<password>"
    And user click on the sign in button
    When user clicks on the user name "team 37"
    When  clicks team name "userinfo" button
    When user verifys options "populated info"
    And user update the firstname "<firstname>"
    And user update the lastname "<lastname>"
    And user update the email "<email>"
    And user update the language "turksih"
    When user clicks on the save button "save"
    Then verifys populated info is "turkish"

    Examples:
      |username|password      |firstname |lastname |email         |
      |wallstreetbets|1234As$ |Newfirst  |NewLast  |new@gmail.com |


