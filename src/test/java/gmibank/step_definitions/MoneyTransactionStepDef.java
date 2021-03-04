package gmibank.step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gmibank.pages.*;
import gmibank.pojos.Customer;
import gmibank.pojos.User;
import gmibank.utilities.*;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class MoneyTransactionStepDef extends BasePage {

    LoginPage loginPage=new LoginPage();
    MoneyTransactionPage moneyTransactionPage=new MoneyTransactionPage();
    CustomerPage customerPage=new CustomerPage();
    AccountCreationPage accountCreationPage=new AccountCreationPage();
    List<User> users = ReadTxt.returnAWholeUser(ConfigurationReader.getProperty("fileNameOfCustomer"));


    @Then("User logs in as a customer")
    public void user_logs_in_as_a_customer() {
        loginPage.login((users.get(users.size()-1).getUsername()),users.get(users.size()-1).getPassword());
    }

    @When("User navigates to money transfer button")
    public void user_navigates_to_money_transfer_button() {

        Driver.waitAndClick(moneyTransactionPage.moneyTransfer,3);
        Driver.sleep(10);
    }

    @When("User selects an account from account dropdown {string}")
    public void user_selects_an_account_from_account_dropdown(String from) {
       Driver.selectByIndex(moneyTransactionPage.fromAccountId,1);
      // Driver.selectAnItemFromDropdown(moneyTransactionPage.fromAccountId,from);
    }

    @When("User selects an account to account dropdown {string}")
    public void user_selects_an_account_to_account_dropdown(String to) {

        Driver.selectByIndex(moneyTransactionPage.toAccountId,1);
       // Driver.selectAnItemFromDropdown(moneyTransactionPage.toAccountId,to);
    }

    @When("User enters amount of balance {string}")
    public void user_enters_amount_of_balance(String balance) {

       Driver.waitAndSendText(moneyTransactionPage.balanceField,balance,3);
       moneyTransactionPage.balanCentField.sendKeys("0");
    }

    @When("User provides a description for transfer {string}")
    public void user_provides_a_description_for_transfer(String description) {

        Driver.waitAndSendText(moneyTransactionPage.descriptionField,description,3);

    }

    @When("User clicks on make transfer button")
    public void user_clicks_on_make_transfer_button() {

        Driver.waitAndClick(moneyTransactionPage.makeTransferButton,3);


    }

    @And("System should display success message as {string}")
    public void system_should_display_success_message_as(String successMessage) {

        BrowserUtils.switchToWindow(moneyTransactionPage.successTransferMessage.getText());

        Assert.assertEquals(successMessage,moneyTransactionPage.successTransferMessage.getText());


    }

    @And("User navigates to my accounts button")
    public void userNavigatesToMyAccountsButton() {

        Driver.waitAndClick(moneyTransactionPage.myAccounts,3);
    }

    @Then("User should be able to see accounts information after transaction")
    public void userShouldBeAbleToSeeAccountsInformationAfterTransaction() {

        Driver.waitAndClick(moneyTransactionPage.firstAccountInfoButton,3);
        Driver.sleep(3000);
        Driver.waitAndClick(moneyTransactionPage.secondAccountInfoButton,3);
        Driver.sleep(3000);


    }


}
