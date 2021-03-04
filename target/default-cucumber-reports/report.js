$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/MoneyTransaction.feature");
formatter.feature({
  "name": "Money Transaction feature",
  "description": "  As a customer I should be able to make money transfer",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Transaction"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Money transfer should be available",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "System should display success message as \"Transfer is succesfull\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on my operations",
  "keyword": "And "
});
formatter.step({
  "name": "User navigates to my accounts button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to see accounts information after transaction",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Balance",
        "Description"
      ]
    },
    {
      "cells": [
        "30",
        "30$ transferred between checking and saving accounts"
      ]
    }
  ]
});
formatter.background({
  "name": "Login As customer",
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
  "name": "User logs in as a customer",
  "keyword": "Then "
});
formatter.match({
  "location": "MoneyTransactionStepDef.user_logs_in_as_a_customer()"
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
      "name": "@Transaction"
    }
  ]
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
  "name": "User selects an account from account dropdown \"\u003cFrom\u003e\"",
  "keyword": "And "
});
formatter.match({
  "location": "MoneyTransactionStepDef.user_selects_an_account_from_account_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects an account to account dropdown \"\u003cTo\u003e\"",
  "keyword": "And "
});
formatter.match({
  "location": "MoneyTransactionStepDef.user_selects_an_account_to_account_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters amount of balance \"30\"",
  "keyword": "And "
});
formatter.match({
  "location": "MoneyTransactionStepDef.user_enters_amount_of_balance(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provides a description for transfer \"30$ transferred between checking and saving accounts\"",
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
  "name": "System should display success message as \"Transfer is succesfull\"",
  "keyword": "And "
});
formatter.match({
  "location": "MoneyTransactionStepDef.system_should_display_success_message_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on my operations",
  "keyword": "And "
});
formatter.match({
  "location": "AccountCreationStepDef.user_clicks_on_my_operations()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to my accounts button",
  "keyword": "And "
});
formatter.match({
  "location": "MoneyTransactionStepDef.userNavigatesToMyAccountsButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to see accounts information after transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "MoneyTransactionStepDef.userShouldBeAbleToSeeAccountsInformationAfterTransaction()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});