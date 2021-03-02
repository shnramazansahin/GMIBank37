$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/CustomerPage.feature");
formatter.feature({
  "name": "Customer creation feature",
  "description": "  Create a new customer",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Customer"
    }
  ]
});
formatter.scenarioOutline({
  "name": "State should be provided as US state and cannot be blank",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@InvalidState"
    }
  ]
});
formatter.step({
  "name": "User enters as a state as \"\u003cstate\u003e\" in US",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on the save button",
  "keyword": "And "
});
formatter.step({
  "name": "System should display warning message for  requirement",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "state"
      ]
    },
    {
      "cells": [
        ""
      ]
    },
    {
      "cells": [
        "Endulus"
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
  "name": "User logs in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDef.user_logs_in()"
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
formatter.scenario({
  "name": "State should be provided as US state and cannot be blank",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Customer"
    },
    {
      "name": "@InvalidState"
    }
  ]
});
formatter.step({
  "name": "User enters as a state as \"\" in US",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_enters_as_a_state_as_in_US(String)"
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
formatter.step({
  "name": "System should display warning message for  requirement",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerPageStepDef.systemShouldDisplayWarningMessageForCityRequirement()"
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
  "name": "User logs in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDef.user_logs_in()"
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
formatter.scenario({
  "name": "State should be provided as US state and cannot be blank",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Customer"
    },
    {
      "name": "@InvalidState"
    }
  ]
});
formatter.step({
  "name": "User enters as a state as \"Endulus\" in US",
  "keyword": "When "
});
formatter.match({
  "location": "CustomerPageStepDef.user_enters_as_a_state_as_in_US(String)"
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
formatter.step({
  "name": "System should display warning message for  requirement",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerPageStepDef.systemShouldDisplayWarningMessageForCityRequirement()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});