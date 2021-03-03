package gmibank.pages;


import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class UserSettingPage {
    public UserSettingPage() {
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "(//label)[1]")
    public WebElement firstname;

    @FindBy(xpath = "(//label)[2]")
    public WebElement lastname;

    @FindBy(xpath = "(//label)[3]")
    public WebElement email;

    @FindBy(xpath = "(//label)[4]")
    public WebElement language;

    @FindBy(xpath = "//input[@id='firstName']")
    public WebElement firstnameTexbox;

    @FindBy(xpath = "//input[@id='lastName']")
    public WebElement lastnameTexBox;

    @FindBy(xpath = "//input[@id='email']")
    public WebElement emailBox;

    @FindBy(xpath = "//select[@id='langKey']")
    public WebElement languageOpt;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement saveButton;

    @FindBy(xpath = "//div[@class='invalid-feedback']")
    public WebElement invalidMessage;



}
