package gmibank.step_definitions;

import com.github.javafaker.Faker;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gmibank.pages.CustomerPage;
import gmibank.pages.LoginPage;
import gmibank.utilities.BrowserUtils;
import gmibank.utilities.DateUtil;
import gmibank.utilities.Driver;
import gmibank.utilities.UsefulMethods;
import org.junit.Assert;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CustomerPageStepDef {

    CustomerPage customerPage=new CustomerPage();
    LoginPage loginPage=new LoginPage();
    Faker faker=new Faker();

    @Given("User navigates to my operations dropdown")
    public void user_navigates_to_my_operations_dropdown() {

        // Driver.selectAnItemFromDropdown(customerPage.entityMenuDropdown,"Manage Customers"); There is no select class for locator
        Driver.waitAndClick(customerPage.entityMenuDropdown,3);
    }

    @Given("User clicks on the manage customers")
    public void user_clicks_on_the_manage_customers() {

        Driver.waitAndClick(customerPage.manageCustomerButton,3);
    }

    @Given("User clicks on create a new customer button")
    public void user_clicks_on_create_a_new_customer_button() {

        Driver.waitAndClick(customerPage.createCustomerButton,3);
    }

    @Given("User enters  {int} digit SSN in ssn search box {string}")
    public void user_enters_digit_SSN_in_ssn_search_box(Integer int1, String ssn) {

        Driver.waitAndSendText(customerPage.searchSsnField,ssn,3);
        //customerPage.searchSsnField.sendKeys(string);

    }
    @When("User clicks on search button")
    public void userClicksOnSearchButton() {

        Driver.waitAndClick(customerPage.searchButton,3);
    }

    @And("User should see all registration information")
    public void userShouldSeeAllRegistrationInformation() throws InterruptedException {

        String ssn=customerPage.ssnField.getAttribute("value");
        String firstName=customerPage.firstNameField.getAttribute("value");
        String lastName=customerPage.lastNameField.getAttribute("value");
        String address=customerPage.addressField.getAttribute("value");
        String email=customerPage.emailField.getAttribute("value");
        String phoneNumber=customerPage.mobilePhoneNumberField.getAttribute("value");

        List<String> allPopulatedInfo=new ArrayList<>(Arrays.asList(firstName,lastName,address,email,phoneNumber,ssn));
        System.out.println("allPopulatedInfo = " + allPopulatedInfo);
        for (int i = 0; i<allPopulatedInfo.size() ; i++) {
            Assert.assertFalse(allPopulatedInfo.get(i).isEmpty());

        }


   //     System.out.println(UsefulMethods.getAttributeFromWebElements(customerPage.allFieldInfo));

//        List<String> regInfo = UsefulMethods.getAttributeFromWebElements(customerPage.allFieldInfo);
//        System.out.println("regInfo = " + regInfo);
                
//        List<String> regInfo = UsefulMethods.getTextFromWebElements(customerPage.allFieldInfo);
//        System.out.println(regInfo.subList(1,8));
////        String alertMessage=Driver.getDriver().switchTo().alert().getText();
////        System.out.println("alertMessage = " + alertMessage);
//        System.out.println("regInfo = " + regInfo);

        //Assert.assertTrue(customerPage.searchButtonMessage.isDisplayed());

    }
    @When("User enters a first name as {string}")
    public void user_enters_a_first_name_as(String firstname) {

        customerPage.firstNameField.clear();
        Driver.waitAndSendText(customerPage.firstNameField,firstname,3);
    }
    @When("User enters a lastname {string}")
    public void user_enters_a_lastname(String lastname) {

        customerPage.lastNameField.clear();
        Driver.waitAndSendText(customerPage.searchSsnField,lastname,3);

    }
    @When("User enters a middel initials as {string}")
    public void user_enters_a_middel_initials_as(String midInitials) {

        customerPage.middleInitialField.clear();
        Driver.waitAndSendText(customerPage.middleInitialField,midInitials,3);

    }
    @When("User enters an email  address as{string}")
    public void user_enters_an_email_address_as(String email) {

        customerPage.emailField.clear();
        Driver.waitAndSendText(customerPage.addressField,email,3);

    }
    @When("User enters {int} digits mobile phone number as {string}")
    public void user_enters_digits_mobile_phone_number_as(Integer int1, String mobilePN) {

        customerPage.mobilePhoneNumberField.clear();
        Driver.waitAndSendText(customerPage.mobilePhoneNumberField,mobilePN,3);

    }
    @When("User enters {int} digits phone number as {string}")
    public void user_enters_digits_phone_number_as(Integer int1, String phone) {

        customerPage.phoneNumberField.clear();
        Driver.waitAndSendText(customerPage.phoneNumberField,phone,3);

    }
    @When("User enters a zip code as {string}")
    public void user_enters_a_zip_code_as(String zipCode) {

        customerPage.zipCodeField.clear();
        Driver.waitAndSendText(customerPage.zipCodeField,zipCode,3);

    }
    @When("User enters an address as {string}")
    public void user_enters_an_address_as(String address) {

        customerPage.addressField.clear();
        Driver.waitAndSendText(customerPage.addressField,address,3);
    }

    @When("User enters a city name as {string}")
    public void user_enters_a_city_name_as(String city) {

        customerPage.cityField.clear();
        Driver.waitAndSendText(customerPage.cityField,city,3);

    }
    @When("User enters a {int} digits SSN as {string}")
    public void user_enters_a_digits_SSN_as(Integer int1, String ssn) {
        customerPage.ssnField.clear();
        Driver.waitAndSendText(customerPage.ssnField,ssn,3);

    }
    @When("User creates a date as {string}")
    public void user_creates_a_date_as(String todaysDate) {

        todaysDate=DateUtil.todaysDate5();
        System.out.println("todaysDate = " + todaysDate);
        BrowserUtils.setAttribute(customerPage.createDate,"Create Date",todaysDate);
        System.out.println(customerPage.createDate.getText());

  //      Driver.waitAndSendText(customerPage.createDate,todaysDate,3);
//        String creationDate=customerPage.createDate.getAttribute("value");
//        System.out.println("creationDatefirst = " + creationDate);
//        creationDate=creationDate.replace(creationDate.charAt(10),' ');
//        System.out.println("creationDate = " + creationDate);
//        Assert.assertEquals(creationDate,todaysDate);

    }
    @When("User can select a country as {string}")
    public void user_can_select_a_country_as(String country) {

        Driver.selectAnItemFromDropdown(customerPage.countryDropdown,country);

    }
    @When("User enters as a state as {string} in US")

    public void user_enters_as_a_state_as_in_US(String state) {

        boolean abv=UsefulMethods.stateAbbreviationDictionary.containsKey(state);
        boolean stateName=UsefulMethods.stateAbbreviationDictionary.containsValue(state);
        if(abv||stateName){
            Driver.waitAndSendText(customerPage.stateField,state,3);
        }else{
            System.out.println("Warning message should be here");  //There is no warning message but requirement says "State" is must
        }
    }
    @When("User can select an user type as {string}")
    public void user_can_select_an_user_type_as(String userType) {

        Driver.selectAnItemFromDropdown(customerPage.userDropdown,userType);

    }
    @When("User can select an account as {string}")
    public void user_can_select_an_account_as(String accountType) {

        Driver.selectAnItemFromDropdown(customerPage.accountsDropdown,accountType);


    }
    @When("User able to check zelle enrolled checkbox")
    public void userAbleToCheckZelleEnrolledCheckbox() {
        customerPage.zelleEnrolledCheckButton.isEnabled();
    }
    @When("User clicks on the save button")
    public void user_clicks_on_the_save_button() {

        Driver.waitAndClick(customerPage.saveButton,3);

    }
    @Then("Verify the success message as {string}")
    public void verify_the_success_message_as(String string) {

//        System.out.println("customerPage.succesMessage = " + customerPage.succesMessage);
//        BrowserUtils.verifyElementDisplayed(customerPage.searchButtonMessage);

    }



}

