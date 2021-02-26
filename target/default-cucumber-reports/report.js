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
      "name": "@Negative"
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
  "name": "clicks team name \"userinfo\" button",
  "keyword": "When "
});
formatter.step({
  "name": "user update the email with invalid email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user validates the error message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email"
      ]
    },
    {
      "cells": [
        "new@gmail.com"
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
      "name": "@Negative"
    }
  ]
});
formatter.before({
  "status": "skipped"
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
  "name": "user enters valid username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.user_enters_valid_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid password \"\u003cpassword\u003e\"",
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
  "name": "clicks team name \"userinfo\" button",
  "keyword": "When "
});
formatter.match({
  "location": "US6_1_UI.clicks_team_name_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user update the email with invalid email \"new@gmail.com\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user validates the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "US5_UI.user_validates_the_error_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});