@Customer
Feature: Customer creation feature
  Create a new customer

  Background:
    Given User goes to login page
    When user enters a valid username and password
    Then User logs in
    And User navigates to my operations dropdown
    And User clicks on the manage customers
    And User clicks on create a new customer button

  @CreateCustomer
  Scenario Outline:User able to create new customer

    Given User enters  9 digit SSN in ssn search box "<SSN>"
    When User clicks on search button
    And User should see all registration information
    When User enters a first name as "<FirstName>"
    When User enters a lastname "<LastName>"
    When User enters a middel initials as "<Middle Initials>"
    When User enters an email  address as"<Email>"
    When User enters 10 digits mobile phone number as "<Mobile Phone Number>"
    When User enters 10 digits phone number as "<Phone Number>"
    When User enters a zip code as "<Zip Code>"
    When User enters an address as "<Address>"
    When User enters a city name as "<City>"
    When User enters a 9 digits SSN as "<SSN>"
    When User creates a date as "Create Date"
    When User can select a country as "<country>"
    When User enters as a state as "<state>" in US
    When User can select an user type as "User Type"
    When User can select an account as "Account Type"
    When User able to check zelle enrolled checkbox
    And  User clicks on the save button
    Then Verify the success message as ""

    Examples:
      | SSN         | FirstName | LastName | Middle Initials | Email                  | Mobile Phone Number | Phone Number | Zip Code | Address                | City   | SSN         | country | state |
      | 458-42-1683 | Olen      | Johnston | OJ              | OlenJohnston@gmail.com | 211-490-4326        | 124-456-7890 | 76543    | 31674 Mitchell Landing | Dallas | 812-35-6019 | USA     | Texas |
      | 760-45-6719 | Aaa       | Bbb      | AB              | ab@gmail.com           | 123-456-7890        | 124-456-7890 | 76543    |                        |        | 812-35-6019 | USA     | Texas |
      | 760-45-6719 | Aaa       | Bbb      | AB              | ab@gmail.com           | 123-456-7890        | 124-456-7890 | 76543    |                        | Dallas | 812-35-6019 | USA     | Texas |


  @PopulatedInfo
  Scenario Outline: User should see all populated info
    Given User enters  9 digit SSN in ssn search box "<SSN>"
    When User clicks on search button
    Then User should see all registration information
    Examples:
      | SSN         |
      | 760-45-6719 |

  @InvalidAddress
  Scenario Outline:Address as street and number should be provided  and cannot be left blank
    When User enters invalid address "<address>"
    And User clicks on the save button
    Then System should display warning message for address "<address>" requirement
    Examples:
      | address |
#      | 12 abc  | testing for also valid address to see result again :)
      |         |
      | 123     |
      | abcd    |
      | @#$%^   |


  @BlankCity
  Scenario:City should be provided and cannot be left as blank
    When User does not enter city as "city"
    And  User clicks on the save button
    Then System should display warning message for  requirement

  @BlankCountry
  Scenario:Country should be typed and cannot be blank
    When User does not select as country "country"
    And  User clicks on the save button
    Then System should display warning message for  requirement

  @InvalidState
  Scenario Outline:State should be provided as US state and cannot be blank
    When User enters as a state as "<state>" in US
    And  User clicks on the save button
    Then System should display warning message for  requirement
    Examples:
    |state|
    |     |
    |Endulus|

