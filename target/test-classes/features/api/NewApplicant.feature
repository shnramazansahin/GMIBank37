@NewApplicantApi

  Feature: Read and validate new applicant

    Background: Set the api uri
      Given All api new applicant data is set to response using  api end point "https://www.gmibank.com/api/tp-account-registrations"

    Scenario: All new applicants api data validation
      Given All new applicants info will be set to new applicants with deserialization
      When User reads new applicants data from correspondent file
      Then All new applicants info has been validated