@pdf
  Feature: Pdf Creation

   Scenario Outline: Create Pdf using some customer data
     Given User creates a connection with DB
     And User retrieves users information for using the query as "<query>"

     Examples:
     |query|
     |SELECT tc.first_name,tc.last_name,role.authority_name FROM tp_customer tc LEFT JOIN jhi_user_authority role ON tc.user_id = role.user_id|