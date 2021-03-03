package gmibank.stepdefinations;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gmibank.constants.AccountStatus;
import gmibank.constants.AccountTypes;
import gmibank.pages.CreateandEditAccount;
import gmibank.pages.SingedInPage;
import gmibank.pages.UserPage;
import gmibank.pojos.Account;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import gmibank.utilities.WriteToTxt;

public class ManageAccount {
    SingedInPage singedInPage = new SingedInPage();
    CreateandEditAccount createandEditAccount= new CreateandEditAccount();
    Account account= new Account();
    UserPage userPage = new UserPage();

    @When("user clicks on my operation and choose manage account")
    public void user_clicks_on_my_operation_and_choose_manage_account() {
        Driver.waitAndClick(singedInPage.myOppertaion,5);
        Driver.waitAndClick(singedInPage.manageAccounts,5);


    }

    @Then("user click on create a new account button")
    public void user_click_on_create_a_new_account_button() {

        Driver.waitAndClick(userPage.CreateButton,7);
    }


    @When("user provides description as  {string}")
    public void user_provides_description_as(String string) {
       //createandEditAccount.description.sendKeys(string);

        Driver.waitAndSendText(createandEditAccount.description,string,2);
        account.setDescription(string);
    }

    @When("user provides balance as {string}")
    public void user_provides_balance_as(String string) {
        Driver.waitAndSendText(createandEditAccount.balance,string,4);
       // createandEditAccount.balance.sendKeys(string);
    }

    @When("user provides account type as {string}")
    public void user_provides_account_type_as(String accountType) {
      if(accountType.equals("SAVING"))
          Driver.selectByVisibleText(createandEditAccount.accountType, AccountTypes.CHECKING_ACCOUNT.toString());
        if(accountType.equals("CHECKING"))
            Driver.selectByVisibleText(createandEditAccount.accountType, AccountTypes.CHECKING_ACCOUNT.toString());
        if(accountType.equals("INVESTING"))
            Driver.selectByVisibleText(createandEditAccount.accountType, AccountTypes.INVESTING_ACCOUNT.toString());
        if(accountType.equals("CREDIT"))
            Driver.selectByVisibleText(createandEditAccount.accountType, AccountTypes.CREDIT_CARD.toString());
    }

    @When("user choose account status as {string}")
    public void user_choose_account_status_as(String string) {
       Driver.selectByVisibleText(createandEditAccount.accountStatus,AccountStatus.ACTIVE.name().toString()); //why
    }

    @Then("user user saves the changes")
    public void user_user_saves_the_changes() {
        WriteToTxt.saveAccountInfo(ConfigurationReader.getProperty("accountInfoFile"),account.getDescription());
        Driver.waitAndClick(createandEditAccount.Save);
    }

//    @When("user  choose a valid date")
//    public void user_choose_a_valid_date() {
//        // Write code here that turns the phrase above into concrete actions
//        throw new cucumber.api.PendingException();
//    }

}
