@NewApplicant
Feature: register page
  @E2E
  @registerNewUserUI
  Scenario Outline: register with valid credentials
    Given user on the regisration page
    When user enters a  9 digit SSN "<SSN>"
    When user enters a name "<name>"
    When user enter a lastname "<lastname>"
    When user enter an address "<address>"
    When user enter a 10 digits phone "<phone>" number
    When user create a username "<username>" without digits
    When user enter a email "<email>" address
    When user enter a valid password "<password>"
    When user reenter the password as "<password>"
    When  click on the register
    Then verify the success message
    Examples:
      |SSN|name|lastname|address|phone|username|email|password|
      |123456789|ALI |AK|123 WALLSTREET 55565|9876543210|DEMO|demo@gmail.com|1234As|

  @E2E
    @adminActivation
    Scenario Outline: admin activation
      Given user is on the application website
      When user enters  valid username "<username>"
      When user enters valid password "<password>"
      And user clicks on the sign in button
      When user clicks on administration dropdown
      When user clicks on the user management button
      When user activates the current customer
      Then user signs out

      Examples:  valid data
        |username       |password |
        |wallstreetbets |1234As$  |


  @E2E
      @loginEmployee
      Scenario Outline: admin activation
      Given user is on the application website
      When user enters  valid username "<username>"
      When user enters valid password "<password>"
      Then user clicks on the sign in button
        Examples:  valid data
          |username       |password |
          |t37employee     |12345As!  |

  @E2E
  @ManageAccounts
  Scenario Outline:managing the account
#    Given user is on the application website
#    When user enters  valid username "<username>"
#    When user enters valid password "<password>"
#    And user clicks on the sign in button
    When user clicks on my operation and choose manage account
    Then user click on create a new account button
    When user provides description as  "<description>"
    When user provides balance as "<balance>"
    When user provides account type as "<type>"
    When  user choose account status as "<account_status>"
    Then user user saves the changes
    Examples:
      |username       |password    |description              |balance    |type        |account_status |
      |t37employee     |12345As!   |saving account NEW       | 1000       |SAVING     |ACTIVE  |
     |          |                |checking account NEW     |20000      |CHECKING   |ACTIVE|

  @E2E
  @ManageCustomer
  Scenario Outline:managing customer
#    Given user on the stated page "login page"
#    When verifys the cancel option
#    When user enters  valid username "<username>"
#    When user enters valid password "<password>"
#    And user clicks on the sign in button
    When user clicks on my operation and choose mangage customers
    When user click on create a new account button
    When user search the SSN as "<SSNsearch>"
    When  user user clicks on the searchbox
    When user types a firstname as  "<firstName>"
    When user types a lastname "<lastName>"
    And user provides the middle initial as "<midleInitial>"
    When user types a email as "<email>" address
    When user provised cell number as "<mobilePhoneNumber>"
    When user enters phone "<phoneNumber>" number
    And user types the zipCode as "<zipCode>"
    When user enter an address "<address>"
    And user types the city as "<city>"
    And user types the same ssn as "<SSN>"
    When user selects a country as "<countryName>"
    And user types the state name as "<state>"
    When user selects an account from dropdown as "<accountDropdown>"
    And user clicks on save button
   # Then user signs out

    Examples: all data
      |username       |password |SSNsearch|firstName|lastName|midleInitial|email|mobilePhoneNumber|phoneNumber|zipCode|address|city       |SSN|countryName|state   |accountDropdown|
      |t37employee     |12345As!|         |         |        |            |     |                 |           |       |       | Fairfax   |   |USA        |Virginia|               |





