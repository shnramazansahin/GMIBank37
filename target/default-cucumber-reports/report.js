$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\US7.feature");
formatter.feature({
  "name": "invalid credentials",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@invalid"
    }
  ]
});
formatter.scenarioOutline({
  "name": "System should not allow to make updates with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user navigate to \"http://www.gmibank.com/\"",
  "keyword": "When "
});
formatter.step({
  "name": "click register",
  "keyword": "Then "
});
formatter.step({
  "name": "user enter the \"\u003cemail\u003e\" and see  \"\u003cerror message\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "error message"
      ]
    },
    {
      "cells": [
        "12345gmail.com",
        "This field is invalid"
      ]
    },
    {
      "cells": [
        "12345@gmailcom",
        "This field is invalid"
      ]
    },
    {
      "cells": [
        "Aysegmail.com",
        "This field is invalid"
      ]
    },
    {
      "cells": [
        "Ayse@gmailcom",
        "This field is invalid"
      ]
    }
  ]
});
formatter.scenario({
  "name": "System should not allow to make updates with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "name": "user navigate to \"http://www.gmibank.com/\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click register",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enter the \"12345gmail.com\" and see  \"This field is invalid\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "System should not allow to make updates with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "name": "user navigate to \"http://www.gmibank.com/\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click register",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enter the \"12345@gmailcom\" and see  \"This field is invalid\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "System should not allow to make updates with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "name": "user navigate to \"http://www.gmibank.com/\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click register",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enter the \"Aysegmail.com\" and see  \"This field is invalid\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "System should not allow to make updates with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "name": "user navigate to \"http://www.gmibank.com/\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "click register",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enter the \"Ayse@gmailcom\" and see  \"This field is invalid\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});