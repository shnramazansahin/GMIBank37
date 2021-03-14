$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/database/PdfGenerator.feature");
formatter.feature({
  "name": "Pdf Creation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@pdf"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Create Pdf using some customer data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User creates a connection with DB",
  "keyword": "Given "
});
formatter.step({
  "name": "User retrieves users information for using the query as \"\u003cquery\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "query"
      ]
    },
    {
      "cells": [
        "SELECT tc.first_name,tc.last_name,role.authority_name FROM tp_customer tc LEFT JOIN jhi_user_authority role ON tc.user_id \u003d role.user_id"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Create Pdf using some customer data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@pdf"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User creates a connection with DB",
  "keyword": "Given "
});
formatter.match({
  "location": "UsersDBStepDef.user_creates_a_connection_with_DB()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User retrieves users information for using the query as \"SELECT tc.first_name,tc.last_name,role.authority_name FROM tp_customer tc LEFT JOIN jhi_user_authority role ON tc.user_id \u003d role.user_id\"",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerDBStepDef.userRetrievesUsersInformationForUsingTheQueryAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});