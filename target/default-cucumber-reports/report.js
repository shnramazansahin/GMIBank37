$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\US6.feature");
formatter.feature({
  "name": "userinfo segment",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Us6"
    }
  ]
});
formatter.scenarioOutline({
  "name": "userinfo should not be editable with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Password"
    }
  ]
});
formatter.step({
  "name": "user  on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters valid username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enter valid password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on the Sign In button",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on the user name \"team 37\"",
  "keyword": "When "
});
formatter.step({
  "name": "clicks team name \"password\" button",
  "keyword": "When "
});
formatter.step({
  "name": "user enters current  \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters new password \"\u003cpassword\u003e\" and retype the new password",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on the save button",
  "keyword": "When "
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
        "email"
      ]
    },
    {
      "cells": [
        "wallstreetbets",
        "1234As$",
        "new@gmailcom"
      ]
    },
    {
      "cells": [
        "wallstreetbets",
        "1234As$",
        "newgmail.com"
      ]
    },
    {
      "cells": [
        "wallstreetbets",
        "1234As$",
        "newgmailcom"
      ]
    }
  ]
});
formatter.scenario({
  "name": "userinfo should not be editable with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Us6"
    },
    {
      "name": "@Password"
    }
  ]
});
formatter.step({
  "name": "user  on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "US6_1_UI.user_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters valid username \"wallstreetbets\"",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.user_enters_valid_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid password \"1234As$\"",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.user_enter_valid_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the Sign In button",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.user_clicks_on_the_Sign_In_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the user name \"team 37\"",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.user_clicks_on_the_user_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks team name \"password\" button",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.clicks_team_name_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters current  \"1234As$\"",
  "keyword": "And "
});
formatter.match({
  "location": "US8.user_enters_current(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters new password \"1234As$\" and retype the new password",
  "keyword": "And "
});
formatter.match({
  "location": "US8.user_enters_new_password_and_retype_the_new_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the save button",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "userinfo should not be editable with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Us6"
    },
    {
      "name": "@Password"
    }
  ]
});
formatter.step({
  "name": "user  on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "US6_1_UI.user_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters valid username \"wallstreetbets\"",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.user_enters_valid_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid password \"1234As$\"",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.user_enter_valid_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the Sign In button",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.user_clicks_on_the_Sign_In_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the user name \"team 37\"",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.user_clicks_on_the_user_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks team name \"password\" button",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.clicks_team_name_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters current  \"1234As$\"",
  "keyword": "And "
});
formatter.match({
  "location": "US8.user_enters_current(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters new password \"1234As$\" and retype the new password",
  "keyword": "And "
});
formatter.match({
  "location": "US8.user_enters_new_password_and_retype_the_new_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the save button",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "userinfo should not be editable with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Us6"
    },
    {
      "name": "@Password"
    }
  ]
});
formatter.step({
  "name": "user  on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "US6_1_UI.user_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters valid username \"wallstreetbets\"",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.user_enters_valid_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid password \"1234As$\"",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.user_enter_valid_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the Sign In button",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.user_clicks_on_the_Sign_In_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the user name \"team 37\"",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.user_clicks_on_the_user_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks team name \"password\" button",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.clicks_team_name_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters current  \"1234As$\"",
  "keyword": "And "
});
formatter.match({
  "location": "US8.user_enters_current(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters new password \"1234As$\" and retype the new password",
  "keyword": "And "
});
formatter.match({
  "location": "US8.user_enters_new_password_and_retype_the_new_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the save button",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});