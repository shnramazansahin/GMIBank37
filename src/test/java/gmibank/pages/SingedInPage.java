package gmibank.pages;


import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SingedInPage {
    public SingedInPage() {
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(id="account-menu")
    public WebElement userNameButton;

    @FindBy(xpath="(//span)[21]")
    public WebElement userInfo;



}
