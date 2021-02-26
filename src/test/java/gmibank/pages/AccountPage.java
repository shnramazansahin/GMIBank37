package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AccountPage {
    public  AccountPage() {
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath="//span[contains(.,'Create a new Account')]")
    public WebElement createAccounts;
}
