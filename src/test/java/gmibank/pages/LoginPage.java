package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
    public LoginPage() {
        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy(xpath = "//input[@name='username']")
    public  WebElement username;

    @FindBy(xpath = "//input[@name='password']")
    public  WebElement password;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement signButton;

    @FindBy(xpath = "//strong[contains(.,'Failed')]")
    public WebElement failAlert;

    @FindBy(xpath = "//span[contains(.,'forget ')]")
    public WebElement resetOption;

    @FindBy(xpath = "//span[contains(.,'new')]")
    public WebElement createNewAccount;

    @FindBy(xpath = "(//button[@type='button'])[3]")
    public WebElement cancelButton;

}
