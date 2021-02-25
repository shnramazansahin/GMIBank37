package gmibank.stepdefinations;



import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gmibank.pages.RegistrationPage;
import gmibank.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.Keys;

import java.security.Key;


public class InvalidEmailStepsUS7 {

    RegistrationPage register=new RegistrationPage();

    @Given("user navigate to {string}")
    public void user_navigate_to(String string) {
        Driver.getDriver().get(string);

    }

    @Then("click register")
    public void click_register() {
        register.navigateRegister();

    }


    @When("user enter the {string} see {string}")
    public void userEnterTheSee(String arg0, String ExpectedMessage) {
        register.emailTextbox.sendKeys(arg0, Keys.ENTER);
        String actualMessage=register.invalidEmailWarningmessage.getText();
        System.out.println(actualMessage);
        Assert.assertTrue(actualMessage.equals(ExpectedMessage));
    }
}
