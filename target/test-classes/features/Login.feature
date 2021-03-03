 @login
Feature: login page
    Background:  go to website
    Given user is on the application website
  @positive
  Scenario Outline:login page should be accessbile with  valid credantials
    When verifys the cancel option
    When user enters  valid username "<username>"
    When user enters valid password "<password>"
    And user clicks on the sign in button
    Then user verifys option "success message"
    When user clicks on my operation and choose mangage customers

    Examples:valid data
      |username       |password |
       |wallstreetbets |1234As$  |


  @negative
  Scenario Outline:login page should not be accessbile with invalid credantials
    When user enters invalid username "<username>"
    When user enter invalid password "<password>"
    And user click on the sign in button
    And user validates the error message
    And there should be an option to reset the password
    Then there should be an option to navigate to registration page

    Examples:invalid data
      |username     |password      |
      |wrongusername|1234As$       |
      |wallstreetbets|wrongpassword|
      |wrongusername|wrongpassword |

