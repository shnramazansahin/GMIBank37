@Us6
Feature: userinfo segment
  @Positive
  Scenario Outline: userinfo should be editable and match with selected language
    Given user  on the login page
    When user enters valid username "<username>"
    When user enter valid password "<password>"
    When user clicks on the Sign In button
    When user clicks on the user name "team 37"
    When  clicks team name "userinfo" button
    When user set the language as English
    When user clicks on the save button "save"
    When user verifys options "populated info" in English
    And user update the firstname "<firstname>"
    And user update the lastname "<lastname>"
    And user update the email "<email>"
    Then user closes the applicaiton

    Examples:
      |username|password      |firstname |lastname |email         |
      |wallstreetbets|1234As$ |Newfirst  |NewLast  |new@gmail.com |


   @TR
   Scenario Outline: userinfo should be in Turkish
     Given user  on the login page
     When user enters valid username "<username>"
     When user enter valid password "<password>"
     When user clicks on the Sign In button
     When user clicks on the user name "team 37"
     When  clicks team name "userinfo" button
     When user set the language as Turksih
     When user clicks on the save button "save"
     When user verifys options "populated info" in Turkish
     Then user closes the applicaiton

     Examples:
       |username|password      |firstname |lastname |email         |
       |wallstreetbets|1234As$ |Newfirst  |NewLast  |new@gmail.com |


  @Negative
  Scenario Outline: userinfo should not be editable with invalid credentials
    Given user  on the login page
    When user enters valid username "<username>"
    When user enter valid password "<password>"
    When user clicks on the Sign In button
    When user clicks on the user name "team 37"
    When  clicks team name "userinfo" button
    And user update the email with invalid email "<email>"
    Then user validates the error message
    Examples:
      |email         |
      |new@gmail.com |