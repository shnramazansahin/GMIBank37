package gmibank.step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gmibank.pages.AccountCreationPage;
import gmibank.pages.LoginPage;
import gmibank.pojos.Accounts;
import gmibank.utilities.*;
import org.openqa.selenium.Keys;

public class AccountCreationStepDef {

    AccountCreationPage accountCreationPage=new AccountCreationPage();
    LoginPage loginPage=new LoginPage();
    Accounts accounts=new Accounts();



    @When("User clicks on my operations")
    public void user_clicks_on_my_operations() {

        Driver.waitAndClick(accountCreationPage.myOperation,3);

    }

    @When("User selects manage account")
    public void user_selects_manage_account() {

       Driver.waitAndClick(accountCreationPage.manageAccounts,3);
    }

    @When("User clicks on create a new account")
    public void user_clicks_on_create_a_new_account() {

        Driver.waitAndClick(accountCreationPage.createAccount,3);

    }

    @When("User provides a description {string}")
    public void user_provides_a_description(String description) {

       accounts.setDescription(description);
       Driver.waitAndSendText(accountCreationPage.description,description,3);
    }

    @When("User provides balance {string}")
    public void user_provides_balance(String balance) {

        accounts.setBalance(Double.parseDouble(balance));
        Driver.waitAndSendText(accountCreationPage.balance,balance,3);
    }

    @When("User choose account type {string}")
    public void user_choose_account_type(String accounType) {

       Driver.selectAnItemFromDropdown(accountCreationPage.accountType,accounType);
    }

    @When("User provides the account status {string}")
    public void user_provides_the_account_status(String accountStatus) {

        Driver.selectAnItemFromDropdown(accountCreationPage.accountStatus,accountStatus);
    }

    @And("User  choose a valid date for creation date")
    public void userChooseAValidDateForCreationDate() {

        String todaysDate=DateUtil.todaysDate5();
        String month=todaysDate.substring(0,2);
        String day=todaysDate.substring(3,5);
        String year=todaysDate.substring(6,10);
        String hour=todaysDate.substring(11,13);
        String minute=todaysDate.substring(14,16);
        String amPm=todaysDate.substring(17);

        accountCreationPage.createDate.sendKeys(month,day,year, Keys.TAB,hour,minute,amPm);

    }

    @Then("User saves the account")
    public void user_saves_the_account() {

        WriteToTxt.saveAccountInfo(ConfigurationReader.getProperty("AllAccountInfoFile"),accounts.getDescription());
        Driver.waitAndClick(accountCreationPage.save,3);

    }


}
