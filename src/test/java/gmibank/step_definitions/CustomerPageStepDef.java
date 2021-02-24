package gmibank.step_definitions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gmibank.pages.CustomerPage;
import gmibank.pages.LoginPage;

public class CustomerPageStepDef {

    CustomerPage customerPage=new CustomerPage();
    LoginPage loginPage=new LoginPage();


    @Given("User loged in")
    public void userLogedIn() {
        loginPage.login("t37employee");
    }

    @Given("User navigates to my operations dropdown")
    public void user_navigates_to_my_operations_dropdown() {


    }

    @Given("User clicks on the mananage customers")
    public void user_clicks_on_the_mananage_customers() {

    }

    @Given("User clicks on create a new customer button")
    public void user_clicks_on_create_a_new_customer_button() {

    }

    @Given("User enters  {int} digit SSN in ssn search box {string}")
    public void user_enters_digit_SSN_in_ssn_search_box(Integer int1, String string) {

    }

    @When("User enters a first name as {string}")
    public void user_enters_a_first_name_as(String string) {

    }

    @When("User enters a lastname {string}")
    public void user_enters_a_lastname(String string) {

    }

    @When("User enters a middel initials as {string}")
    public void user_enters_a_middel_initials_as(String string) {

    }

    @When("User enters an email  address as{string}")
    public void user_enters_an_email_address_as(String string) {

    }

    @When("User enters {int} digits mobile phone number as {string}")
    public void user_enters_digits_mobile_phone_number_as(Integer int1, String string) {

    }

    @When("User enters {int} digits phone number as {string}")
    public void user_enters_digits_phone_number_as(Integer int1, String string) {

    }

    @When("User enters a zip code as {string}")
    public void user_enters_a_zip_code_as(String string) {

    }

    @When("User enters an address as {string}")
    public void user_enters_an_address_as(String string) {

    }

    @When("User enters a city name as {string}")
    public void user_enters_a_city_name_as(String string) {

    }

    @When("User enters a {int} digits SSN as {string}")
    public void user_enters_a_digits_SSN_as(Integer int1, String string) {

    }

    @When("User creates a date as {string}")
    public void user_creates_a_date_as(String string) {

    }

    @When("User can select a country as {string}")
    public void user_can_select_a_country_as(String string) {

    }

    @When("User enters as a state as {string} in US")
    public void user_enters_as_a_state_as_in_US(String string) {

    }

    @When("User can select an user type as {string}")
    public void user_can_select_an_user_type_as(String string) {

    }

    @When("User can select an account as {string}")
    public void user_can_select_an_account_as(String string) {

    }

    @When("User clicks on the save button")
    public void user_clicks_on_the_save_button() {

    }

    @Then("Verify the success message as {string}")
    public void verify_the_success_message_as(String string) {

    }


}

