$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/CustomerPage.feature");
formatter.feature({
  "name": "Customer creation feature",
  "description": "    Create a new customer",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Customer"
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
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Customer"
    },
    {
      "name": "@Date"
    }
  ]
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
formatter.after({
  "status": "passed"
});
});