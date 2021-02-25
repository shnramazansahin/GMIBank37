@invalid
  Feature : Invalid Email
    Scenario Outline:Email id cannot contain just digits or chars without "@" sign or "." extension
      Given user navigate to "http://www.gmibank.com/"
      Then click register
      When user enter the "<email>" see "<errormessage>"

      Examples:
      |email          |errormessage        |
      |12345gmail.com |This field is invalid|
      |12345@gmailcom |This field is invalid|
      |Aysegmail.com  |This field is invalid|
      |Ayse@gmailcom  |This field is invalid|
