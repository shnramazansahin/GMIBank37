package gmibank.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends BasePage{


    @FindBy(xpath = "//li[@id='account-menu']")
    public WebElement homePageManIcon;

    @FindBy(css="#login-item")
    public WebElement signInButton;

    @FindBy(linkText="Register")
    public WebElement registrationButton;



}
