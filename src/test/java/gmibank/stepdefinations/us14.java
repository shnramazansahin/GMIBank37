package gmibank.stepdefinations;

import cucumber.api.java.en.When;
import gmibank.pages.*;
import gmibank.utilities.DateUtil;
import org.openqa.selenium.support.ui.Select;

import java.util.Date;

public class us14 {
    SingedInPage singedInPage = new SingedInPage();
    AccountPage accountPage= new AccountPage();
    CreateandEditAccount createandEditAccount= new CreateandEditAccount();

    @When("user clicks on my operation and choose manage account")
    public void user_clicks_on_my_operation_and_choose_manage_account() {
        singedInPage.myOppertaion.click();
        singedInPage.manageAccounts.click();
    }

    @When("user click on create a new account")
    public void user_click_on_create_a_new_account() {
       accountPage.createAccounts.click();
    }

    @When("user provides description balance")
    public void user_provides_description_balance() {
       createandEditAccount.description.sendKeys("demo");
        createandEditAccount.balance.sendKeys("1000");
    }

    @When("user choose account type and status")
    public void user_choose_account_type_and_status() {
        Select select = new Select(createandEditAccount.accountType);
        select.selectByIndex(1);

        Select select1 = new Select(createandEditAccount.accountStatus);
        select.selectByIndex(0);
    }

    @When("user  choose a valid date")
    public void user_choose_a_valid_date() {
       // createandEditAccount.createDate.sendKeys(DateUtil.todaysDate5());
       // System.out.println(DateUtil.todaysDate5());
        createandEditAccount.createDate.sendKeys(DateUtil.previousDays(2));


    }

}
