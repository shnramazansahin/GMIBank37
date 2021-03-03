$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\End2End.feature");
formatter.feature({
  "name": "register page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@NewApplicant"
    }
  ]
});
formatter.scenarioOutline({
  "name": "register with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2E"
    },
    {
      "name": "@registerNewUserUI"
    }
  ]
});
formatter.step({
  "name": "user on the regisration page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters a  9 digit SSN \"\u003cSSN\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters a name \"\u003cname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enter a lastname \"\u003clastname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enter an address \"\u003caddress\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enter a 10 digits phone \"\u003cphone\u003e\" number",
  "keyword": "When "
});
formatter.step({
  "name": "user create a username \"\u003cusername\u003e\" without digits",
  "keyword": "When "
});
formatter.step({
  "name": "user enter a email \"\u003cemail\u003e\" address",
  "keyword": "When "
});
formatter.step({
  "name": "user enter a valid password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user reenter the password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click on the register",
  "keyword": "When "
});
formatter.step({
  "name": "verify the success message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SSN",
        "name",
        "lastname",
        "address",
        "phone",
        "username",
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "123456789",
        "ALI",
        "AK",
        "123 WALLSTREET 55565",
        "9876543210",
        "DEMO",
        "demo@gmail.com",
        "1234As"
      ]
    }
  ]
});
formatter.scenario({
  "name": "register with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NewApplicant"
    },
    {
      "name": "@E2E"
    },
    {
      "name": "@registerNewUserUI"
    }
  ]
});
formatter.step({
  "name": "user on the regisration page",
  "keyword": "Given "
});
formatter.match({
  "location": "Registration.user_on_the_regisration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a  9 digit SSN \"123456789\"",
  "keyword": "When "
});
formatter.match({
  "location": "Registration.user_enters_a_digit_SSN(Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a name \"ALI\"",
  "keyword": "When "
});
formatter.match({
  "location": "Registration.user_enters_a_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter a lastname \"AK\"",
  "keyword": "When "
});
formatter.match({
  "location": "Registration.user_enter_a_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter an address \"123 WALLSTREET 55565\"",
  "keyword": "When "
});
formatter.match({
  "location": "Registration.user_enter_an_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter a 10 digits phone \"9876543210\" number",
  "keyword": "When "
});
formatter.match({
  "location": "Registration.user_enter_a_digits_phone_number(Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user create a username \"DEMO\" without digits",
  "keyword": "When "
});
formatter.match({
  "location": "Registration.user_create_a_username_without_digits(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter a email \"demo@gmail.com\" address",
  "keyword": "When "
});
formatter.match({
  "location": "Registration.user_enter_a_email_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter a valid password \"1234As\"",
  "keyword": "When "
});
formatter.match({
  "location": "Registration.user_enter_a_valid_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user reenter the password as \"1234As\"",
  "keyword": "When "
});
formatter.match({
  "location": "Registration.user_reenter_the_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the register",
  "keyword": "When "
});
formatter.match({
  "location": "Registration.click_on_the_register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.verify_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "admin activation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2E"
    },
    {
      "name": "@adminActivation"
    }
  ]
});
formatter.step({
  "name": "user is on the application website",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters  valid username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters valid password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on the sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on administration dropdown",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on the user management button",
  "keyword": "When "
});
formatter.step({
  "name": "user activates the current customer",
  "keyword": "When "
});
formatter.step({
  "name": "user signs out",
  "keyword": "Then "
});
formatter.examples({
  "name": "valid data",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "wallstreetbets",
        "1234As$"
      ]
    }
  ]
});
formatter.scenario({
  "name": "admin activation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NewApplicant"
    },
    {
      "name": "@E2E"
    },
    {
      "name": "@adminActivation"
    }
  ]
});
formatter.step({
  "name": "user is on the application website",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_is_on_the_application_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters  valid username \"wallstreetbets\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_enters_valid_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid password \"1234As$\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_enters_valid_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_clicks_on_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on administration dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "E2E.user_clicks_on_administration_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the user management button",
  "keyword": "When "
});
formatter.match({
  "location": "E2E.user_clicks_on_the_user_management_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user activates the current customer",
  "keyword": "When "
});
formatter.match({
  "location": "E2E.user_activates_the_current_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signs out",
  "keyword": "Then "
});
formatter.match({
  "location": "E2E.user_signs_out()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "admin activation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2E"
    },
    {
      "name": "@loginEmployee"
    }
  ]
});
formatter.step({
  "name": "user is on the application website",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters  valid username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters valid password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on the sign in button",
  "keyword": "Then "
});
formatter.examples({
  "name": "valid data",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "t37employee",
        "12345As!"
      ]
    }
  ]
});
formatter.scenario({
  "name": "admin activation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NewApplicant"
    },
    {
      "name": "@E2E"
    },
    {
      "name": "@loginEmployee"
    }
  ]
});
formatter.step({
  "name": "user is on the application website",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_is_on_the_application_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters  valid username \"t37employee\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_enters_valid_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid password \"12345As!\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_enters_valid_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the sign in button",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_clicks_on_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "managing the account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2E"
    },
    {
      "name": "@ManageAccounts"
    }
  ]
});
formatter.step({
  "name": "user clicks on my operation and choose manage account",
  "keyword": "When "
});
formatter.step({
  "name": "user click on create a new account button",
  "keyword": "Then "
});
formatter.step({
  "name": "user provides description as  \"\u003cdescription\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user provides balance as \"\u003cbalance\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user provides account type as \"\u003ctype\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user choose account status as \"\u003caccount_status\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user user saves the changes",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "description",
        "balance",
        "type",
        "account_status"
      ]
    },
    {
      "cells": [
        "t37employee",
        "12345As!",
        "saving account NEW",
        "1000",
        "SAVING",
        "ACTIVE"
      ]
    },
    {
      "cells": [
        "",
        "",
        "checking account NEW",
        "20000",
        "CHECKING",
        "ACTIVE"
      ]
    }
  ]
});
formatter.scenario({
  "name": "managing the account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NewApplicant"
    },
    {
      "name": "@E2E"
    },
    {
      "name": "@ManageAccounts"
    }
  ]
});
formatter.step({
  "name": "user clicks on my operation and choose manage account",
  "keyword": "When "
});
formatter.match({
  "location": "ManageAccount.user_clicks_on_my_operation_and_choose_manage_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on create a new account button",
  "keyword": "Then "
});
formatter.match({
  "location": "ManageAccount.user_click_on_create_a_new_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides description as  \"saving account NEW\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManageAccount.user_provides_description_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides balance as \"1000\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManageAccount.user_provides_balance_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides account type as \"SAVING\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManageAccount.user_provides_account_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose account status as \"ACTIVE\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManageAccount.user_choose_account_status_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user user saves the changes",
  "keyword": "Then "
});
formatter.match({
  "location": "ManageAccount.user_user_saves_the_changes()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "managing the account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NewApplicant"
    },
    {
      "name": "@E2E"
    },
    {
      "name": "@ManageAccounts"
    }
  ]
});
formatter.step({
  "name": "user clicks on my operation and choose manage account",
  "keyword": "When "
});
formatter.match({
  "location": "ManageAccount.user_clicks_on_my_operation_and_choose_manage_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on create a new account button",
  "keyword": "Then "
});
formatter.match({
  "location": "ManageAccount.user_click_on_create_a_new_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides description as  \"checking account NEW\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManageAccount.user_provides_description_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides balance as \"20000\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManageAccount.user_provides_balance_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides account type as \"CHECKING\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManageAccount.user_provides_account_type_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose account status as \"ACTIVE\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManageAccount.user_choose_account_status_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user user saves the changes",
  "keyword": "Then "
});
formatter.match({
  "location": "ManageAccount.user_user_saves_the_changes()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "managing customer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2E"
    },
    {
      "name": "@ManageCustomer"
    }
  ]
});
formatter.step({
  "name": "user clicks on my operation and choose mangage customers",
  "keyword": "When "
});
formatter.step({
  "name": "user click on create a new account button",
  "keyword": "When "
});
formatter.step({
  "name": "user search the SSN as \"\u003cSSNsearch\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user user clicks on the searchbox",
  "keyword": "When "
});
formatter.step({
  "name": "user types a firstname as  \"\u003cfirstName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user types a lastname \"\u003clastName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user provides the middle initial as \"\u003cmidleInitial\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user types a email as \"\u003cemail\u003e\" address",
  "keyword": "When "
});
formatter.step({
  "name": "user provised cell number as \"\u003cmobilePhoneNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters phone \"\u003cphoneNumber\u003e\" number",
  "keyword": "When "
});
formatter.step({
  "name": "user types the zipCode as \"\u003czipCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enter an address \"\u003caddress\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user types the city as \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user types the same ssn as \"\u003cSSN\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects a country as \"\u003ccountryName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user types the state name as \"\u003cstate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects an account from dropdown as \"\u003caccountDropdown\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.examples({
  "name": "all data",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "SSNsearch",
        "firstName",
        "lastName",
        "midleInitial",
        "email",
        "mobilePhoneNumber",
        "phoneNumber",
        "zipCode",
        "address",
        "city",
        "SSN",
        "countryName",
        "state",
        "accountDropdown"
      ]
    },
    {
      "cells": [
        "t37employee",
        "12345As!",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Fairfax",
        "",
        "USA",
        "Virginia",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "managing customer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NewApplicant"
    },
    {
      "name": "@E2E"
    },
    {
      "name": "@ManageCustomer"
    }
  ]
});
formatter.step({
  "name": "user clicks on my operation and choose mangage customers",
  "keyword": "When "
});
formatter.match({
  "location": "ManageCustomers.user_clicks_on_my_operation_and_choose_mangage_customers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on create a new account button",
  "keyword": "When "
});
formatter.match({
  "location": "ManageAccount.user_click_on_create_a_new_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search the SSN as \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManageCustomers.user_search_the_SSN_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user user clicks on the searchbox",
  "keyword": "When "
});
formatter.match({
  "location": "ManageCustomers.user_user_clicks_on_the_searchbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types a firstname as  \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManageCustomers.user_types_a_firstname_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types a lastname \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManageCustomers.user_types_a_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides the middle initial as \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManageCustomers.user_provides_the_middle_initial_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types a email as \"\" address",
  "keyword": "When "
});
formatter.match({
  "location": "ManageCustomers.user_types_a_email_as_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provised cell number as \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManageCustomers.user_provised_cell_number_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters phone \"\" number",
  "keyword": "When "
});
formatter.match({
  "location": "ManageCustomers.user_enters_phone_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types the zipCode as \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManageCustomers.user_types_the_zipCode_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter an address \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "Registration.user_enter_an_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types the city as \"Fairfax\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManageCustomers.user_types_the_city_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types the same ssn as \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManageCustomers.user_types_the_same_ssn_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects a country as \"USA\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManageCustomers.user_selects_a_country_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types the state name as \"Virginia\"",
  "keyword": "And "
});
formatter.match({
  "location": "ManageCustomers.user_types_the_state_name_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects an account from dropdown as \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "ManageCustomers.user_selects_an_account_from_dropdown_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "ManageCustomers.user_clicks_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});