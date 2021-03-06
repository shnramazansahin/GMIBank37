package gmibank.pages;


import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public    class MainPage {

    public MainPage() {
        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy(xpath = "//li[@id='account-menu']")
    public WebElement mainPageManIcon;

    @FindBy(linkText ="Sign in")
    public WebElement signInButton;

    @FindBy(xpath ="//span[contains(.,'Register')]")
    public WebElement registerButton;
}

