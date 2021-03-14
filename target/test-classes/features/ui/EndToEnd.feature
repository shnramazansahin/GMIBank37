@E2E

Feature: Test all main functionality feature

  Background:
    Given User is on the home page

  @Registration
  Scenario:Register with valid credentials
    Given User navigates to registration page
    When user enters a  9 digit SSN "SSN"
    When user enters a name"name"
    When user enter a lastname "lastname"
    When user enter an address "address" with zip
    When user enter a 10 digits phone "phone" number
    When user create a username "username" without digits
    When user enter a email "email" address
    When user enter a valid password "password"
    When user reenter the "confirmation password"
    When  click on the register
    Then verify the success message


  @Activation
  Scenario: User activation by admin
    Given User goes to login page
    When User logs in as an admin
    When User clicks on administration dropdown
    When User clicks on the user management button
    When User activates the current customer
    Then User signs out


  @AccountCreation
  Scenario Outline: User should be able to create an account
    Given User goes to login page
    When user enters a valid username and password
    When User clicks on my operations
    And  User selects manage account
    When User clicks on create a new account
    And User provides a description "<description>"
    And User provides balance "<balance>"
    And User choose account type "<type>"
    And  User provides the account status "<status>"
    And User  choose a valid date for creation date
    Then User saves the account
    Examples:
      | description               | balance | type     | status |
      | Checking account for user | 10000   | CHECKING | ACTIVE |
      | Saving account for user   | 10000   | SAVING   | ACTIVE |

  @CustomerCreation
  Scenario:User able to create new customer
    Given User goes to login page
    When user enters a valid username and password
    And User navigates to my operations dropdown
    And User clicks on the manage customers
    And User clicks on create a new customer button
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
#    Then Verify the success message as ""

#    Examples:
#      | SSN         | FirstName | LastName | Middle Initials | Email                  | Mobile Phone Number | Phone Number | Zip Code | Address                | City   | SSN         | country | state |
#      | 458-42-1683 | Olen      | Johnston | OJ              | OlenJohnston@gmail.com | 211-490-4326        | 124-456-7890 | 76543    | 31674 Mitchell Landing | Dallas | 812-35-6019 | USA     | Texas |


  @MoneyTransaction
  Scenario Outline: Money transfer should be available
    Given User goes to login page
    Then User logs in as a customer
    When User clicks on my operations
    And User navigates to money transfer button
    And User selects an account from account dropdown "<From>"
    And User selects an account to account dropdown "<To>"
    And User enters amount of balance "<Balance>"
    And User provides a description for transfer "<Description>"
    And User clicks on make transfer button
    And System should display success message as "Transfer is succesfull"
    And User clicks on my operations
    And User navigates to my accounts button
    Then User should be able to see accounts information after transaction

    Examples:
      | Balance | Description                                          |
      | 5      | 5$ transferred between checking and saving accounts |



