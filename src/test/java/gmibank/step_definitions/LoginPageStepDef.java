package gmibank.step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gmibank.pages.HomePage;
import gmibank.pages.LoginPage;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;

public class LoginPageStepDef {

    HomePage homePage=new HomePage();
    LoginPage loginPage=new LoginPage();

    @Given("User goes to login page")
    public void user_goes_to_login_page() {

        Driver.getDriver().get(ConfigurationReader.getProperty("gmiBank_url"));
        Driver.waitAndClick(homePage.homePageManIcon,2);
        Driver.waitAndClick(homePage.signInButton,1);

    }

    @When("user enters a valid username and password")
    public void user_enters_a_valid_username_and_password() {
        loginPage.login("t37employee");

    }

    @Then("User logs in")
    public void user_logs_in() {


    }

}
