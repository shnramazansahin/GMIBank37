package gmibank.step_definitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gmibank.pages.AccountCreationPage;
import gmibank.pages.LoginPage;
import gmibank.utilities.BrowserUtils;
import gmibank.utilities.DateUtil;
import gmibank.utilities.Driver;

public class AccountCreationStepDef {

    AccountCreationPage accountCreationPage=new AccountCreationPage();
    LoginPage loginPage=new LoginPage();


    @When("User clicks on my operations")
    public void user_clicks_on_my_operations() {

        Driver.waitAndClick(accountCreationPage.myOppertaion,3);

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

       Driver.waitAndSendText(accountCreationPage.description,description,3);
    }

    @When("User provides balance {string}")
    public void user_provides_balance(String balance) {

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

    @When("User  choose a valid date")
    public void user_choose_a_valid_date() {
        String todaysDate=DateUtil.todaysDate5();
        accountCreationPage.createDate.clear();
        BrowserUtils.setAttribute(accountCreationPage.createDate,"createDate",todaysDate);
        System.out.println(accountCreationPage.createDate.getAttribute("value"));
    }

    @Then("User saves the account")
    public void user_saves_the_account() {

        Driver.waitAndClick(accountCreationPage.save,3);
    }
}
