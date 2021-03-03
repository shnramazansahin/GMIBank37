package gmibank.stepdefinations;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gmibank.pages.SingedInPage;
import gmibank.pages.UserPage;
import gmibank.utilities.BrowserUtils;
import gmibank.utilities.Driver;

public class E2E {
    SingedInPage singedInPage = new SingedInPage();
    UserPage userManagementPage = new UserPage();


    @When("user clicks on administration dropdown")
    public void user_clicks_on_administration_dropdown() {
        singedInPage.AdministrationButton.click();
    }

    @When("user clicks on the user management button")
    public void user_clicks_on_the_user_management_button() {
        singedInPage.userManagementButton.click();
    }

    @When("user activates the current customer")
    public void user_activates_the_current_customer() {
        BrowserUtils.scrollToElement(userManagementPage.lastPageButton);

        Driver.waitAndClick(userManagementPage.lastPageButton,5);

        Driver.waitAndClick(userManagementPage.deactivatedLast,7);

    }

    @Then("user signs out")
    public void user_signs_out() {
        singedInPage.userNameButton.click();
        singedInPage.signOut.click();
    }

}
