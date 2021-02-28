$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/moneyTransaction.feature");
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
        "From",
        "To",
        "Balance",
        "Description"
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
  "status": "skipped"
});
formatter.step({
  "name": "User goes to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepDef.user_goes_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User logs in as a customer",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "status": "skipped"
});
formatter.step({
  "name": "User navigates to money transfer button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User selects an account from account dropdown \"From\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User selects an account to account dropdown \"To\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters amount of balance \"Balance\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User provides a description for transfer \"Description\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks on make transfer button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "System should display succes message as \"\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});