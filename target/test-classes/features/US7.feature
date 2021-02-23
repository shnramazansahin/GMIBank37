@invalid
Feature:invalid credentials
  Scenario Outline : System should not allow to make updates with invalid credentials
  When user navigate to "http://www.gmibank.com/"
  Then click register
  And email id cannot contain



  #Email id cannot contain just digits or chars without "@" sign or "." extension
  #There should not be an option of any other language other than Englisg or Turkish