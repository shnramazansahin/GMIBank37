package gmibank.StepDefinitions;


//import com.github.javafaker.Faker;
import com.github.javafaker.Faker;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import cucumber.api.java.eo.Se;
import gmibank.pages.Creditandeditaccount;
import gmibank.pages.Customerpage;
import gmibank.pages.LoginPage;
import gmibank.utilities.*;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
public class Dummy2StepDef {
   Faker faker=new Faker();
    LoginPage loginpage=new LoginPage();
    Customerpage customerpage=new Customerpage();
    Creditandeditaccount creditandeditaccount=new Creditandeditaccount();



    String fileName=ConfigurationReader.getProperty("fileNameOfCustomer");
    String firstName;
    String lastName;
    String password;
    String username;
    String setssn1;
    String getSetssn1;
    String getMobilePhoneNumber;
    Driver dataTable;
    String ssn1;


    @Given("User goes to login page")
    public void user_goes_to_login_page() throws InterruptedException {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmiBank_url"));
        loginpage.accountsignin.click();
        loginpage.signInButton.click();
    }

    @When("user enters a valid username")
    public void user_enters_a_valid_username() throws InterruptedException {
      //  Thread.sleep(5000);
       loginpage.username.sendKeys("t37employee");
    }

    @When("user enters a valid password")
    public void user_enters_a_valid_password() throws InterruptedException {
       // Thread.sleep(5000);
        loginpage.password.sendKeys(ConfigurationReader.getProperty("password"));
    }

    @Then("User logs in")
    public void user_logs_in() throws InterruptedException {
        Thread.sleep(5000);
        loginpage.loginButton.click();

    }

    @Then("User navigates to my operations dropdown")
    public void user_navigates_to_my_operations_dropdown() throws InterruptedException {
        Thread.sleep(3000);
         customerpage.myOperations.click();
    }

    @Then("User clicks on the mananage customers")
    public void user_clicks_on_the_mananage_customers() throws InterruptedException {
        Thread.sleep(3000);
        customerpage.manageCustomer.click();

    }

    @Then("User clicks on create a new customer button")
    public void user_clicks_on_create_a_new_customer_button() throws InterruptedException {
        Thread.sleep(3000);
        customerpage.createCustomerButton.click();

    }

    @Given("User enters  {int} digit SSN in ssn search box {string}")
    public void user_enters_digit_SSN_in_ssn_search_box(Integer int1, String ssn) throws InterruptedException {
        Thread.sleep(5000);
      // customerpage.ssn1.sendKeys("345-67-9876");
        Driver.waitAndSendText(customerpage.ssn1,ssn,3);
     //  customerpage.ssn1(dataTable.get(ssn1)
    }






    @When("User enters a first name as {string}")
    public void user_enters_a_first_name_as(String firstname) throws InterruptedException {
        Thread.sleep(5000);
        customerpage.firstNameTextbox.sendKeys(ConfigurationReader.getProperty("firstname"));

    }

    @When("User enters a lastname {string}")
    public void user_enters_a_lastname(String lastname) {
        customerpage.lastNameField.sendKeys(ConfigurationReader.getProperty("lastname"));

    }

    @When("User enters a middel initials as {string}")
    public void user_enters_a_middel_initials_as(String middleInitial) {
        customerpage.middleInitialTextbox.sendKeys(ConfigurationReader.getProperty("middleInitial"));

    }

    @When("User enters an email  address as{string}")
    public void user_enters_an_email_address_as(String email) {
        customerpage.emailTextbox.sendKeys(ConfigurationReader.getProperty("middleInitial"));


    }

    @When("User enters {int} digits mobile phone number as {string}")
    public void user_enters_digits_mobile_phone_number_as(Integer int1, String mobilePN) {
        customerpage.mobilePhoneNumberField.clear();
        Driver.waitAndSendText(customerpage.mobilePhoneNumberField,mobilePN,3);

    }

    @When("User enters {int} digits phone number as {string}")
    public void user_enters_digits_phone_number_as(Integer int1, String phone) {
        customerpage.phoneNumberField.clear();
        Driver.waitAndSendText(customerpage.phoneNumberField,phone,3);


    }

    @When("User enters a zip code as {string}")
    public void user_enters_a_zip_code_as(String zipcode) {
        customerpage.zipCodeField.clear();
        Driver.waitAndSendText(customerpage.zipCodeField,zipcode,3);

    }

    @When("User enters an address as {string}")
    public void user_enters_an_address_as(String address) {
        customerpage.addressField.clear();
        Driver.waitAndSendText(customerpage.addressField,address,3);


    }

    @When("User enters a city name as {string}")
    public void user_enters_a_city_name_as(String city) {
        customerpage.cityField.clear();
        Driver.waitAndSendText(customerpage.cityField,city,3);


    }

    @When("User enters a {int} digits SSN as {string}")
    public void user_enters_a_digits_SSN_as(Integer int1, String ssn2) {
        customerpage.ssn2.clear();
        Driver.waitAndSendText(customerpage.ssn2,ssn2,3);



    }

    @When("User creates a date as {string}")
    public void user_creates_a_date_as(String previousDays) {
       creditandeditaccount.createDate.sendKeys(DateUtil.previousDays(2));



    }

    @When("User can select a country as {string}")
    public void user_can_select_a_country_as(String country) {
        Driver.selectAnItemFromDropdown(customerpage.countryDropdown,country);
        Select select=new Select(customerpage.countryDropdown);
        List<WebElement>countryDropdown=select.getOptions();


    }

    @When("User enters as a state as {string} in US")
    public void user_enters_as_a_state_as_in_US(String string) {
        customerpage.stateField.sendKeys();

    }

    @When("User can select an user type as {string}")
    public void user_can_select_an_user_type_as(String usertype) {
        Driver.selectAnItemFromDropdown(customerpage.userDropdown,usertype);

        //Select select=new Select(customerpage.userDropdown);
       // List<WebElement>userDropdown=select.getOptions();


    }

    @When("User can select an account as {string}")
    public void user_can_select_an_account_as(String account) {
        Select select = new Select(creditandeditaccount.accountType);
        select.selectByIndex(1);

        Select select1 = new Select(creditandeditaccount.accountStatus);
        select.selectByIndex(0);


    }

    @Then("User can select zelle enroled chexbox{string}")
    public void user_can_select(String string) {
        customerpage.zelleEnrolledCheckButton.isEnabled();

    }

    @When("User clicks on the save button")
    public void user_clicks_on_the_save_button() {
        Driver.waitAndClick(customerpage.saveButton,3);
    }


    @Then("User can select {string}")
    public void userCanSelect(String arg0) {
        customerpage.zelleEnrolledCheckButton.isEnabled();
    }
}
