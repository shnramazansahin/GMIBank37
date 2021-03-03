package gmibank.stepdefinations;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gmibank.pages.UserSettingPage;
import gmibank.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.ArrayList;
import java.util.List;

public class UserInfoEmailUpdate {

    UserSettingPage userSettingPage = new UserSettingPage();
    @When("user update the email with invalid email {string}")
    public void user_update_the_email_with_invalid_email(String string) {
        userSettingPage.emailBox.clear();
        userSettingPage.emailBox.sendKeys(string);
    }

    @Then("user validates the error message on the user setting page")
    public void user_validates_the_error_message_on_the_user_setting_page() {

        String invalidMessageText=userSettingPage.invalidMessage.getText();
        Assert.assertTrue(invalidMessageText.contains("invalid"));
        Driver.closeDriver();
    }

    @When("there should be only {string} and {string} language option")
    public void there_should_be_only_and_language_option(String string, String string2) {
        Select select = new Select(userSettingPage.languageOpt);
        List<WebElement> languageOpt = select.getOptions();
        List<String> languagesString = new ArrayList<>();

        for (WebElement w : languageOpt) {
            languagesString.add(w.getText());
            for (String k : languagesString) {
                System.out.println(k);
                Assert.assertFalse(!k.equals(string) && !k.equals(string2)); // fails

            }
        }




    }

//    @When("user checks the language options")
//    public void user_checks_the_language_options() {
//        Select select = new Select(userSettingPage.languageOpt);
//        List<WebElement> languageOpt = select.getOptions();
//        List<String> languagesString = new ArrayList<>();
//
//        for (WebElement w : languageOpt) {
//            languagesString.add(w.getText());
//            for (String k : languagesString) {
//                System.out.println(k);
//                Assert.assertFalse(!k.equals("English") && !k.equals("Türkçe")); // fails
//
//            }
//        }



}
