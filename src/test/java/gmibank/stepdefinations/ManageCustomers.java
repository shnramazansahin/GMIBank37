package gmibank.stepdefinations;

import com.github.javafaker.Faker;
import cucumber.api.java.en.When;
import gmibank.pages.CustomerPage;
import gmibank.pages.SingedInPage;
import gmibank.pages.UserPage;
import gmibank.pojos.User;
import gmibank.utilities.BrowserUtils;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import gmibank.utilities.ReadTxt;

import java.util.List;

public class ManageCustomers {
    CustomerPage customerPage = new CustomerPage();
    SingedInPage signedInPage = new SingedInPage();
    UserPage userPage = new UserPage();
    Faker faker = new Faker();
    List<User> users = ReadTxt.returnAWholeUser(ConfigurationReader.getProperty("fileNameOfCustomer"));

    @When("user clicks on my operation and choose mangage customers")
    public void user_clicks_on_my_operation_and_choose_mangage_customers() {
        Driver.waitAndClick(signedInPage.myOppertaion);
        Driver.waitAndClick(signedInPage.manageCustomers, 2);
//        Driver.waitAndClick(userPage.CreateButton,3);

    }
    @When("user search the SSN as {string}")
    public void user_search_the_SSN_as(String ssn) {
       ssn= users.get(users.size()-1).getSsn(); // this gets the registered last customer
        Driver.waitAndSendText(customerPage.ssnTextbox,ssn,4);

    }

    @When("user user clicks on the searchbox")
    public void user_user_clicks_on_the_searchbox() {

        Driver.waitAndClick(customerPage.searchButton,2);


    }

    @When("user types a firstname as  {string}")
    public void user_types_a_firstname_as(String string) {
        // there is nothing to type here, info populates on the page
    }

    @When("user types a lastname {string}")
    public void user_types_a_lastname(String string) {

    }

    @When("user provides the middle initial as {string}")
    public void user_provides_the_middle_initial_as(String middleInitial) {
      middleInitial=faker.name().nameWithMiddle().substring(0,1);
      Driver.waitAndSendText(customerPage.middleInitialTextbox,middleInitial,2);
    }

    @When("user types a email as {string} address")
    public void user_types_a_email_as_address(String string) {

    }

    @When("user provised cell number as {string}")
    public void user_provised_cell_number_as(String string) {

    }

    @When("user enters phone {string} number")
    public void user_enters_phone_number(String phone) {
        BrowserUtils.scrollToElement(customerPage.phoneNumberTextbox);
        phone=faker.phoneNumber().phoneNumber();
        Driver.phone(phone);
      Driver.waitAndSendText(customerPage.phoneNumberTextbox,phone,3);

    }

    @When("user types the zipCode as {string}")
    public void user_types_the_zipCode_as(String zip) {
        BrowserUtils.scrollToElement(customerPage.zipCodeTextbox);
       zip = faker.address().zipCode();
       Driver.waitAndSendText(customerPage.zipCodeTextbox,zip,2);
    }

    @When("user types the city as {string}")
    public void user_types_the_city_as(String address) {
        BrowserUtils.scrollToElement(customerPage.cityTextbox);
     //  address= faker.address().city();
       Driver.waitAndSendText(customerPage.cityTextbox,address,3);
    }

    @When("user types the same ssn as {string}")
    public void user_types_the_same_ssn_as(String string) {
        BrowserUtils.scrollToElement(customerPage.ssnTextbox2);
    }

    @When("user selects a country as {string}")
    public void user_selects_a_country_as(String country) {
        BrowserUtils.scrollToElement(customerPage.countryDropdown);
        Driver.selectByVisibleText(customerPage.countryDropdown,country);
    }

    @When("user types the state name as {string}")
    public void user_types_the_state_name_as(String state) {
        Driver.waitAndSendText(customerPage.stateTextbox,state,5);
    }

    @When("user selects an account from dropdown as {string}")
    public void user_selects_an_account_from_dropdown_as(String string) {
       // BrowserUtils.scrollToElement(customerPage.saveButton);
       List<String >accounts = ReadTxt.returnAllAccounts(ConfigurationReader.getProperty("accountInfoFile"));

       Driver.waitAndClickLocationText(customerPage.accountsDropdown,accounts.get(accounts.size()-1));
       Driver.waitAndClickLocationText(customerPage.accountsDropdown,accounts.get(accounts.size()-2));

    }

    @When("user clicks on save button")
    public void user_clicks_on_save_button() {

        Driver.waitAndClick(customerPage.saveButton);
    }

}