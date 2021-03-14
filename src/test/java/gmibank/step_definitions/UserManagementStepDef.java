package gmibank.step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gmibank.pages.LoginPage;
import gmibank.pages.UserManagementPage;
import gmibank.utilities.BrowserUtils;
import gmibank.utilities.Driver;
import gmibank.utilities.ExcelUtil;
import gmibank.utilities.UsefulMethods;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class UserManagementStepDef {

    UserManagementPage userManagementPage= new UserManagementPage();
    LoginPage loginPage=new LoginPage();

    @Given("User logs in as an admin")
    public void user_logs_in_as_an_admin() {

        loginPage.login("t37admin");
    }

    @When("User clicks on administration dropdown")
    public void user_clicks_on_administration_dropdown() throws InterruptedException {
        Thread.sleep(3000);

        Driver.waitAndClick(userManagementPage.administrationDropdown,3);
    }

    @When("User clicks on the user management button")
    public void user_clicks_on_the_user_management_button() {

        Driver.waitAndClick(userManagementPage.userManagementButton,3);
    }

    @When("User activates the current customer")
    public void user_activates_the_current_customer() throws InterruptedException {

        Driver.waitAndClick(userManagementPage.lastPageButton,4);
        Driver.getDriver().navigate().refresh();
        int lastUserIndex=BrowserUtils.getElementsText(userManagementPage.allUsersInLastPage).size();
        System.out.println("lastUserIndex = " + lastUserIndex);
        WebElement lastUserActivateButton=Driver.getDriver().findElement(By.xpath("//table/tbody/tr["+lastUserIndex+"]/td[4]"));
        lastUserActivateButton.click();
       //Driver.getDriver().findElement(By.xpath("//span[contains(.,'Deactivated')])[last()]")).click();

    }

    @Then("User signs out")
    public void user_signs_out() {

       Driver.waitAndClick(userManagementPage.accountMenu,3);
       Driver.waitAndClick(userManagementPage.signOutButton,3);
    }

}
