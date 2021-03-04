@CreateAccount2
Feature: US_14_Date should be created on the time of account creation
Background:
  Scenario:clicks on the manager customers
    Given User goes to login page
    When user enters a valid username
    When user enters a valid password
    Then User logs in
    And User navigates to my operations dropdown
    And User clicks on the mananage customers
    And User clicks on create a new customer button


  Scenario Outline:User able to create new customer

    Given User enters  9 digit SSN in ssn search box "<SSN>"
    When User enters a first name as "<FirstName>"
    When User enters a lastname "<LastName>"
    When User enters a middel initials as "<Middel Initials>"
    When User enters an email  address as"<Email>"
    When User enters 10 digits mobile phone number as "<Mobile Phone Number>"
    When User enters 10 digits phone number as "<Phone Number>"
    When User enters a zip code as "<Zip Code>"
    When User enters an address as "Address"
    When User enters a city name as "<City>"
    When User enters a 9 digits SSN as "<SSN>"
    When User creates a date as "Create Date"
    When User can select a country as "name"
    When User enters as a state as "name" in US
    When User can select an user type as "User Type"
    When User can select an account as "Account Type"
    Then User can select "Zelle Enrolled"
    When User clicks on the save button


    Examples:
      |SSN     |      FirstName       |        LastName     |     Middel Initials   | Email      |Mobile Phone Number |Phone Number  |Zip Code |City        |SSN|
      |345-67-9876|  employeeFirstname|  employesLastname   |employeemiddlename     |employeemail@gmail.com   |576-384-6779        |  561-354-6806 |78965   |Flower Mound|345-67-9876|





