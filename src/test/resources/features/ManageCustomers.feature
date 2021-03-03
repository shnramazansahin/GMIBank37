@CustomerCreation
Feature: account creation try
  Scenario Outline:creating customer
    Given user on the stated page "login page"
    When verifys the cancel option
    When user enters  valid username "<username>"
    When user enters valid password "<password>"
    And user clicks on the sign in button
    When user clicks on my operation and choose mangage customers
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
    Then user signs out

    Examples: all data
     |username | password|SSNsearch|firstName|lastName|midleInitial|email|mobilePhoneNumber|phoneNumber|zipCode|address|city|SSN|countryName|state|accountDropdown|
      |wallstreetbets| 1234As$ |       |         |        |            |     |                 |           |       |       | Fairfax   |   |USA|Virginia|               |


