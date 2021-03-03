$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/EndToEnd.feature");
formatter.feature({
  "name": "Test all main functionality feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@E2E"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationStepDef.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Register with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@E2E"
    },
    {
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "name": "User navigates to registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationStepDef.user_navigates_to_registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a  9 digit SSN \"SSN\"",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enters_a_digit_SSN(Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a name\"name\"",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enters_a_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter a lastname \"lastname\"",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enter_a_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter an address \"address\" with zip",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enter_an_address_with_zip(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter a 10 digits phone \"phone\" number",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enter_a_digits_phone_number(Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user create a username \"username\" without digits",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_create_a_username_without_digits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter a email \"email\" address",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enter_a_email_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter a valid password \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_enter_a_valid_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user reenter the \"confirmation password\"",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.user_reenter_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the register",
  "keyword": "When "
});
formatter.match({
  "location": "RegistrationStepDef.click_on_the_register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationStepDef.verifyTheSuccessMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationStepDef.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User activation by admin",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@E2E"
    },
    {
      "name": "@Activation"
    }
  ]
});
formatter.step({
  "name": "User goes to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepDef.user_goes_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logs in as an admin",
  "keyword": "When "
});
formatter.match({
  "location": "UserManagementStepDef.user_logs_in_as_an_admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on administration dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "UserManagementStepDef.user_clicks_on_administration_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the user management button",
  "keyword": "When "
});
formatter.match({
  "location": "UserManagementStepDef.user_clicks_on_the_user_management_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User activates the current customer",
  "keyword": "When "
});
formatter.match({
  "location": "UserManagementStepDef.user_activates_the_current_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User signs out",
  "keyword": "Then "
});
formatter.match({
  "location": "UserManagementStepDef.user_signs_out()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User should be able to create an account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AccountCreation"
    }
  ]
});
formatter.step({
  "name": "User goes to login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters a valid username and password",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on my operations",
  "keyword": "When "
});
formatter.step({
  "name": "User selects manage account",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on create a new account",
  "keyword": "When "
});
formatter.step({
  "name": "User provides a description \"\u003cdescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User provides balance \"\u003cbalance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User choose account type \"\u003ctype\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User provides the account status \"\u003cstatus\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User  choose a valid date for creation date",
  "keyword": "And "
});
formatter.step({
  "name": "User saves the account",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "description",
        "balance",
        "type",
        "status"
      ]
    },
    {
      "cells": [
        "Checking account for user",
        "10000",
        "CHECKING",
        "ACTIVE"
      ]
    },
    {
      "cells": [
        "Saving account for user",
        "10000",
        "SAVING",
        "ACTIVE"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationStepDef.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to create an account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2E"
    },
    {
      "name": "@AccountCreation"
    }
  ]
});
formatter.step({
  "name": "User goes to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepDef.user_goes_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepDef.user_enters_a_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on my operations",
  "keyword": "When "
});
formatter.match({
  "location": "AccountCreationStepDef.user_clicks_on_my_operations()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects manage account",
  "keyword": "And "
});
formatter.match({
  "location": "AccountCreationStepDef.user_selects_manage_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on create a new account",
  "keyword": "When "
});
formatter.match({
  "location": "AccountCreationStepDef.user_clicks_on_create_a_new_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provides a description \"Checking account for user\"",
  "keyword": "And "
});
formatter.match({
  "location": "AccountCreationStepDef.user_provides_a_description(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provides balance \"10000\"",
  "keyword": "And "
});
formatter.match({
  "location": "AccountCreationStepDef.user_provides_balance(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User choose account type \"CHECKING\"",
  "keyword": "And "
});
formatter.match({
  "location": "AccountCreationStepDef.user_choose_account_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provides the account status \"ACTIVE\"",
  "keyword": "And "
});
formatter.match({
  "location": "AccountCreationStepDef.user_provides_the_account_status(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User  choose a valid date for creation date",
  "keyword": "And "
});
formatter.match({
  "location": "AccountCreationStepDef.userChooseAValidDateForCreationDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User saves the account",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountCreationStepDef.user_saves_the_account()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationStepDef.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to create an account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2E"
    },
    {
      "name": "@AccountCreation"
    }
  ]
});
formatter.step({
  "name": "User goes to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepDef.user_goes_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepDef.user_enters_a_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on my operations",
  "keyword": "When "
});
formatter.match({
  "location": "AccountCreationStepDef.user_clicks_on_my_operations()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects manage account",
  "keyword": "And "
});
formatter.match({
  "location": "AccountCreationStepDef.user_selects_manage_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on create a new account",
  "keyword": "When "
});
formatter.match({
  "location": "AccountCreationStepDef.user_clicks_on_create_a_new_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provides a description \"Saving account for user\"",
  "keyword": "And "
});
formatter.match({
  "location": "AccountCreationStepDef.user_provides_a_description(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provides balance \"10000\"",
  "keyword": "And "
});
formatter.match({
  "location": "AccountCreationStepDef.user_provides_balance(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User choose account type \"SAVING\"",
  "keyword": "And "
});
formatter.match({
  "location": "AccountCreationStepDef.user_choose_account_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provides the account status \"ACTIVE\"",
  "keyword": "And "
});
formatter.match({
  "location": "AccountCreationStepDef.user_provides_the_account_status(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User  choose a valid date for creation date",
  "keyword": "And "
});
formatter.match({
  "location": "AccountCreationStepDef.userChooseAValidDateForCreationDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User saves the account",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountCreationStepDef.user_saves_the_account()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User able to create new customer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "name": "User goes to login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters a valid username and password",
  "keyword": "When "
});
formatter.step({
  "name": "User navigates to my operations dropdown",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on the manage customers",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on create a new customer button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters  9 digit SSN in ssn search box \"\u003cSSN\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User clicks on search button",
  "keyword": "When "
});
formatter.step({
  "name": "User should see all registration information",
  "keyword": "And "
});
formatter.step({
  "name": "User enters a first name as \"\u003cFirstName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters a lastname \"\u003cLastName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters a middel initials as \"\u003cMiddle Initials\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters an email  address as\"\u003cEmail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters 10 digits mobile phone number as \"\u003cMobile Phone Number\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters 10 digits phone number as \"\u003cPhone Number\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters a zip code as \"\u003cZip Code\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters an address as \"\u003cAddress\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters a city name as \"\u003cCity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters a 9 digits SSN as \"\u003cSSN\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User creates a date as \"Create Date\"",
  "keyword": "When "
});
formatter.step({
  "name": "User can select a country as \"\u003ccountry\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters as a state as \"\u003cstate\u003e\" in US",
  "keyword": "When "
});
formatter.step({
  "name": "User can select an user type as \"User Type\"",
  "keyword": "When "
});
formatter.step({
  "name": "User can select an account as \"Account Type\"",
  "keyword": "When "
});
formatter.step({
  "name": "User able to check zelle enrolled checkbox",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on the save button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SSN",
        "FirstName",
        "LastName",
        "Middle Initials",
        "Email",
        "Mobile Phone Number",
        "Phone Number",
        "Zip Code",
        "Address",
        "City",
        "SSN",
        "country",
        "state"
      ]
    },
    {
      "cells": [
        "458-42-1683",
        "Olen",
        "Johnston",
        "OJ",
        "OlenJohnston@gmail.com",
        "211-490-4326",
        "124-456-7890",
        "76543",
        "31674 Mitchell Landing",
        "Dallas",
        "812-35-6019",
        "USA",
        "Texas"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationStepDef.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User able to create new customer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2E"
    },
    {
      "name": "@CustomerCreation"
    }
  ]
});
formatter.step({
  "name": "User goes to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepDef.user_goes_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepDef.user_enters_a_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to my operations dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerPageStepDef.user_navigates_to_my_operations_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the manage customers",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerPageStepDef.user_clicks_on_the_manage_customers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on create a new customer button",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerPageStepDef.user_clicks_on_create_a_new_customer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters  9 digit SSN in ssn search box \"458-42-1683\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerPageStepDef.user_enters_digit_SSN_in_ssn_search_box(Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on search button",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.userClicksOnSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see all registration information",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerPageStepDef.userShouldSeeAllRegistrationInformation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters a first name as \"Olen\"",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_enters_a_first_name_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters a lastname \"Johnston\"",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_enters_a_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters a middel initials as \"OJ\"",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_enters_a_middel_initials_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters an email  address as\"OlenJohnston@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_enters_an_email_address_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters 10 digits mobile phone number as \"211-490-4326\"",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_enters_digits_mobile_phone_number_as(Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters 10 digits phone number as \"124-456-7890\"",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_enters_digits_phone_number_as(Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters a zip code as \"76543\"",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_enters_a_zip_code_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters an address as \"31674 Mitchell Landing\"",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_enters_an_address_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters a city name as \"Dallas\"",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_enters_a_city_name_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters a 9 digits SSN as \"458-42-1683\"",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_enters_a_digits_SSN_as(Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User creates a date as \"Create Date\"",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_creates_a_date_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can select a country as \"USA\"",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_can_select_a_country_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters as a state as \"Texas\" in US",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_enters_as_a_state_as_in_US(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can select an user type as \"User Type\"",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_can_select_an_user_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can select an account as \"Account Type\"",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_can_select_an_account_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to check zelle enrolled checkbox",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.userAbleToCheckZelleEnrolledCheckbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the save button",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerPageStepDef.user_clicks_on_the_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Money transfer should be available",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@MoneyTransaction"
    }
  ]
});
formatter.step({
  "name": "User goes to login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User logs in as a customer",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on my operations",
  "keyword": "When "
});
formatter.step({
  "name": "User navigates to money transfer button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects an account from account dropdown \"\u003cFrom\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User selects an account to account dropdown \"\u003cTo\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters amount of balance \"\u003cBalance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User provides a description for transfer \"\u003cDescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on make transfer button",
  "keyword": "And "
});
formatter.step({
  "name": "System should display succes message as \"\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "From",
        "To",
        "Balance",
        "Description"
      ]
    },
    {
      "cells": [
        "checking account for t37customer",
        "investment account for t37customer",
        "3000",
        "3000$ transfered between checking and investment accounts"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationStepDef.user_is_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Money transfer should be available",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2E"
    },
    {
      "name": "@MoneyTransaction"
    }
  ]
});
formatter.step({
  "name": "User goes to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepDef.user_goes_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logs in as a customer",
  "keyword": "Then "
});
formatter.match({
  "location": "MoneyTransactionStepDef.user_logs_in_as_a_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on my operations",
  "keyword": "When "
});
formatter.match({
  "location": "AccountCreationStepDef.user_clicks_on_my_operations()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to money transfer button",
  "keyword": "And "
});
formatter.match({
  "location": "MoneyTransactionStepDef.user_navigates_to_money_transfer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects an account from account dropdown \"checking account for t37customer\"",
  "keyword": "And "
});
formatter.match({
  "location": "MoneyTransactionStepDef.user_selects_an_account_from_account_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects an account to account dropdown \"investment account for t37customer\"",
  "keyword": "And "
});
formatter.match({
  "location": "MoneyTransactionStepDef.user_selects_an_account_to_account_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters amount of balance \"3000\"",
  "keyword": "And "
});
formatter.match({
  "location": "MoneyTransactionStepDef.user_enters_amount_of_balance(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provides a description for transfer \"3000$ transfered between checking and investment accounts\"",
  "keyword": "And "
});
formatter.match({
  "location": "MoneyTransactionStepDef.user_provides_a_description_for_transfer(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on make transfer button",
  "keyword": "And "
});
formatter.match({
  "location": "MoneyTransactionStepDef.user_clicks_on_make_transfer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "System should display succes message as \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MoneyTransactionStepDef.system_should_display_succes_message_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});