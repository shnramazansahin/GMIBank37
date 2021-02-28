package gmibank.step_definitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gmibank.pages.BasePage;
import gmibank.pages.LoginPage;
import gmibank.pages.MoneyTransactionPage;
import gmibank.utilities.BrowserUtils;
import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class MoneyTransactionStepDef extends BasePage {

    LoginPage loginPage=new LoginPage();
    MoneyTransactionPage moneyTransactionPage=new MoneyTransactionPage();



    @Then("User logs in as a customer")
    public void user_logs_in_as_a_customer() {

        loginPage.login("t37customer");

    }

    @When("User navigates to money transfer button")
    public void user_navigates_to_money_transfer_button() {

        Driver.waitAndClick(moneyTransactionPage.moneyTransfer,3);
    }

    @When("User selects an account from account dropdown {string}")
    public void user_selects_an_account_from_account_dropdown(String from) {

       Driver.selectAnItemFromDropdown(moneyTransactionPage.fromAccountId,from);
    }

    @When("User selects an account to account dropdown {string}")
    public void user_selects_an_account_to_account_dropdown(String to) {

        Driver.selectAnItemFromDropdown(moneyTransactionPage.toAccountId,to);
    }

    @When("User enters amount of balance {string}")
    public void user_enters_amount_of_balance(String balance) {

       Driver.waitAndSendText(moneyTransactionPage.balanceField,balance,3);
    }

    @When("User provides a description for transfer {string}")
    public void user_provides_a_description_for_transfer(String description) {

        Driver.waitAndSendText(moneyTransactionPage.descriptionField,description,3);

    }

    @When("User clicks on make transfer button")
    public void user_clicks_on_make_transfer_button() {

        Driver.waitAndClick(moneyTransactionPage.makeTransferButton,3);


    }

    @Then("System should display succes message as {string}")
    public void system_should_display_succes_message_as(String string) {

    }



}
