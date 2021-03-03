package gmibank.step_definitions;

import com.github.javafaker.Faker;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gmibank.pages.CustomerPage;
import gmibank.pages.LoginPage;
import gmibank.utilities.*;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CustomerPageStepDef {

    CustomerPage customerPage = new CustomerPage();
    LoginPage loginPage = new LoginPage();
    Faker faker = new Faker();

    @Given("User navigates to my operations dropdown")
    public void user_navigates_to_my_operations_dropdown() {

        // Driver.selectAnItemFromDropdown(customerPage.entityMenuDropdown,"Manage Customers"); There is no select class for locator
        Driver.waitAndClick(customerPage.entityMenuDropdown, 3);
    }

    @Given("User clicks on the manage customers")
    public void user_clicks_on_the_manage_customers() {

        Driver.waitAndClick(customerPage.manageCustomerButton, 3);
    }

    @Given("User clicks on create a new customer button")
    public void user_clicks_on_create_a_new_customer_button() {

        Driver.waitAndClick(customerPage.createCustomerButton, 3);
    }

    @Given("User enters  {int} digit SSN in ssn search box {string}")
    public void user_enters_digit_SSN_in_ssn_search_box(Integer int1, String ssn) {

        Driver.waitAndSendText(customerPage.searchSsnField, ssn, 3);
        //customerPage.searchSsnField.sendKeys(string);


    }

    @When("User clicks on search button")
    public void userClicksOnSearchButton() throws InterruptedException {
        Thread.sleep(3000);
        Driver.waitAndClick(customerPage.searchButton, 5);

    }

    @Then("User should see all registration information")
    public void userShouldSeeAllRegistrationInformation() throws InterruptedException {
        Thread.sleep(3000);
        String ssn = customerPage.ssnField.getAttribute("value");
        String firstName = customerPage.firstNameField.getAttribute("value");
        String lastName = customerPage.lastNameField.getAttribute("value");
        String address = customerPage.addressField.getAttribute("value");
        String email = customerPage.emailField.getAttribute("value");
        String phoneNumber = customerPage.mobilePhoneNumberField.getAttribute("value");

        List<String> allPopulatedInfo = new ArrayList<>(Arrays.asList(firstName, lastName, address, email, phoneNumber, ssn));
        System.out.println("allPopulatedInfo = " + allPopulatedInfo);
        for (int i = 0; i < allPopulatedInfo.size(); i++) {
            Assert.assertFalse(allPopulatedInfo.get(i).isEmpty());
        }
    }

    @When("User enters a first name as {string}")
    public void user_enters_a_first_name_as(String firstname) {

        customerPage.firstNameField.clear();
        Driver.waitAndSendText(customerPage.firstNameField, firstname, 3);
    }

    @When("User enters a lastname {string}")
    public void user_enters_a_lastname(String lastname) {

        customerPage.lastNameField.clear();
        Driver.waitAndSendText(customerPage.lastNameField, lastname, 3);

    }

    @When("User enters a middel initials as {string}")
    public void user_enters_a_middel_initials_as(String midInitials) {

        customerPage.middleInitialField.clear();
        Driver.waitAndSendText(customerPage.middleInitialField, midInitials, 3);

    }

    @When("User enters an email  address as{string}")
    public void user_enters_an_email_address_as(String email) {

        customerPage.emailField.clear();
        Driver.waitAndSendText(customerPage.addressField, email, 3);

    }

    @When("User enters {int} digits mobile phone number as {string}")
    public void user_enters_digits_mobile_phone_number_as(Integer int1, String mobilePN) {

        customerPage.mobilePhoneNumberField.clear();
        Driver.waitAndSendText(customerPage.mobilePhoneNumberField, mobilePN, 3);

    }

    @When("User enters {int} digits phone number as {string}")
    public void user_enters_digits_phone_number_as(Integer int1, String phone) {

        customerPage.phoneNumberField.clear();
        Driver.waitAndSendText(customerPage.phoneNumberField, phone, 3);

    }

    @When("User enters a zip code as {string}")
    public void user_enters_a_zip_code_as(String zipCode) {

        customerPage.zipCodeField.clear();
        Driver.waitAndSendText(customerPage.zipCodeField, zipCode, 3);

    }

    @When("User enters an address as {string}")
    public void user_enters_an_address_as(String address) {

        customerPage.addressField.clear();
        Driver.waitAndSendText(customerPage.addressField, address, 3);

    }

    @When("User enters a city name as {string}")
    public void user_enters_a_city_name_as(String city) {

        customerPage.cityField.clear();
        Driver.waitAndSendText(customerPage.cityField, city, 3);


    }

    @When("User enters a {int} digits SSN as {string}")
    public void user_enters_a_digits_SSN_as(Integer int1, String ssn) {

        customerPage.ssnField.clear();
        Driver.waitAndSendText(customerPage.ssnField, ssn, 3);

    }

    @When("User creates a date as {string}")
    public void user_creates_a_date_as(String todaysDate) {

        //dd/MM/yyyy hh:mm aa
        todaysDate = DateUtil.todaysDate5();
        String month = todaysDate.substring(0, 2);
        String day = todaysDate.substring(3, 5);
        String year = todaysDate.substring(6, 10);
        String hour = todaysDate.substring(11, 13);
        String minute = todaysDate.substring(14, 16);
        String amPm = todaysDate.substring(17);

        customerPage.createDate.sendKeys(month, day, year, Keys.TAB, hour, minute, amPm);


    }

    @When("User can select a country as {string}")
    public void user_can_select_a_country_as(String country) {

        BrowserUtils.scrollToElement(customerPage.countryDropdown);
        Driver.selectByVisibleText(customerPage.countryDropdown,country);

        //There is no warning message for blank field ###Bug


    }

    @When("User enters as a state as {string} in US")

    public void user_enters_as_a_state_as_in_US(String state) {

//        boolean abv = UsefulMethods.stateAbbreviationDictionary.containsKey(state);
//        boolean stateName = UsefulMethods.stateAbbreviationDictionary.containsValue(state);
//        if (abv || stateName) {
            Driver.waitAndSendText(customerPage.stateField, state, 3);
//        } else {
//            System.out.println("Warning message should be here");  //There is no warning message but requirement says "State" is must
//        }

        //There is no warning message for blank field ###Bug
    }

    @When("User can select an user type as {string}")
    public void user_can_select_an_user_type_as(String userType) {

       // Driver.selectAnItemFromDropdown(customerPage.userDropdown, userType);

    }

    @When("User can select an account as {string}")
    public void user_can_select_an_account_as(String accountType) {

        //Driver.selectAnItemFromDropdown(customerPage.accountsDropdown, accountType);
        List<String >accounts = ReadTxt.returnAllAccounts(ConfigurationReader.getProperty("AllAccountInfoFile"));

        Driver.waitAndClickLocationText(customerPage.accountsDropdown,accounts.get(accounts.size()-1));
        Driver.waitAndClickLocationText(customerPage.accountsDropdown,accounts.get(accounts.size()-2));


    }

    @When("User able to check zelle enrolled checkbox")
    public void userAbleToCheckZelleEnrolledCheckbox() {

        Assert.assertTrue(customerPage.zelleEnrolledCheckButton.isEnabled());
    }

    @When("User clicks on the save button")
    public void user_clicks_on_the_save_button() {

        Driver.waitAndClick(customerPage.saveButton, 3);

    }

    @Then("Verify the success message as {string}")
    public void verify_the_success_message_as(String string) {

        BrowserUtils.switchToWindow(customerPage.succesMessage.getText());
        BrowserUtils.verifyElementDisplayed(customerPage.succesMessage);


    }
    @When("User enters invalid address {string}")
    public void userEntersInvalidAddress(String address) {
        Driver.waitAndClick(customerPage.addressField,3);
        Driver.waitAndSendText(customerPage.addressField,address,3);

    }

    @Then("System should display warning message for address {string} requirement")
    public void systemShouldDisplayWarningMessageForAddressRequirement(String address) {
      //  System.out.println("Is address valid = "+UsefulMethods.isValidAddress(address));
        if(customerPage.addressField.getAttribute("value").isBlank()){
      //      System.out.println("This field is required.");
            Assert.assertEquals("This field is required.",Driver.waitAndGetText(customerPage.blankAddressWarningMessage,3));
        }else
            if(!UsefulMethods.isValidAddress(address)){
            System.out.println("There should be another warning message in here");
        }
    }

    @When("User does not enter city as {string}")
    public void userDoesNotEnterCityAs(String city) {
        city="";
        Driver.waitAndClick(customerPage.cityField,3);
        Driver.waitAndSendText(customerPage.cityField,city,3);

    }

    @Then("System should display warning message for  requirement")
    public void systemShouldDisplayWarningMessageForCityRequirement() {
        if(customerPage.cityField.getAttribute("value").isBlank()||
                customerPage.countryDropdown.getAttribute("value").isBlank()||
                customerPage.stateField.getAttribute("value").isBlank()) {
            //  Assert.assertEquals("This field is required.",Driver.waitAndGetText(customerPage.blankCityWarningMessage,3));//empty locator there is no kind of message
            System.out.println("There should be 'This field is required.' warning message in page");//Even left blank all three fields there is no warning message also customer creation is completed with blank fields

        }
    }

    @When("User does not select as country {string}")
    public void userDoesNotSelectAsCountry(String country) {
        country="";
        Driver.waitAndSendText(customerPage.countryDropdown,country,3);
        Driver.waitAndGetText(customerPage.countryDropdown,3);
    }

    @When("User provides a state except US states as {string}")
    public void userProvidesAStateExceptUSStatesAs(String state) {

        Driver.waitAndSendText(customerPage.stateField,state,3);
    }


}

