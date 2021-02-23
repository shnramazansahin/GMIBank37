package gmibank.stepdefinations;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gmibank.pages.LoginPage;
import gmibank.pages.MainPage;
import gmibank.pages.RegistrationPage;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import org.junit.Assert;

import java.util.Set;

public class US5_UI {
    MainPage mainPage = new MainPage();
    LoginPage loginPage = new LoginPage();
    RegistrationPage registrationPage= new RegistrationPage();
    @Given("user  on the {string}")
    public void user_on_the(String string) {
        Driver.getDriver().get(ConfigurationReader.getProperty("url"));
        mainPage.mainPageManIcon.click();
        mainPage.signInButton.click();
    }

    @When("user enters invalid username {string}")
    public void user_enters_invalid_username(String string) {
        loginPage.username.sendKeys(string);
    }

    @When("user enter invalid password {string}")
    public void user_enter_invalid_password(String string) {
        loginPage.password.sendKeys(string);
    }

    @When("user click on the sign in button")
    public void user_click_on_the_sign_in_button() {
        loginPage.signButton.click();
    }

    @When("user validates the error message")
    public void user_validates_the_error_message() throws InterruptedException {
        Thread.sleep(2000);
        String alertText= loginPage.failAlert.getText();
        // System.out.println(alertText);
        Thread.sleep(2000);
        Assert.assertTrue(alertText.contains("Failed to sign in"));


    }

    @When("there should be an option to reset the password")
    public void there_should_be_an_option_to_reset_the_password() {
        String resetOptionText=loginPage.resetOption.getText();
        resetOptionText.contains("Did you forget");
    }

    @Then("there should be an option to navigate to registration page")
    public void there_should_be_an_option_to_navigate_to_registration_page() {
        loginPage.createNewAccount.click();
        String firstWindow=Driver.getDriver().getWindowHandle();
        Set<String> allWindows=Driver.getDriver().getWindowHandles();
        for(String w:allWindows) {
            if(!w.equals(firstWindow)) {
                Driver.getDriver().switchTo().window(w);

            }

        }
        String registration=registrationPage.title.getText();
        Assert.assertTrue(registration.contains("Registration"));

    }



}
