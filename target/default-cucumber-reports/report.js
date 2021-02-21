$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\Dummy.feature");
formatter.feature({
  "name": "test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.scenario({
  "name": "Gmi",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "user goes to page",
  "keyword": "Given "
});
formatter.match({
  "location": "test.user_goes_to_page()"
});
formatter.result({
  "status": "passed"
});
});