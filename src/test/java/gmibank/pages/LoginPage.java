package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
    public LoginPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(id = "account-menu")
    public WebElement loginDropdown;

    @FindBy(xpath = "//span[contains(text(),'Sign in')]")//span[contains(text(),'Sign in')]
    public WebElement signInButton;

    @FindBy(id = "username")
    public WebElement username;

    @FindBy(name = "password")
    public WebElement password;

    @FindBy(xpath = "//*[@class='btn btn-primary']")
    public WebElement loginButton;

    @FindBy(xpath = "//*[@id='account-menu']")
    public WebElement accountsignin;







}
