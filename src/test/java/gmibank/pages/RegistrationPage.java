package gmibank.pages;


import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegistrationPage {
    public RegistrationPage() {

            PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy(id="register-title")
    public WebElement title;

    @FindBy(id="ssn")
    public WebElement ssn;

    @FindBy(id="firstname")
    public WebElement firstname;

    @FindBy(id="lastname")
    public WebElement lastname;

    @FindBy(id="address")
    public WebElement address;

    @FindBy(id="mobilephone")
    public WebElement mobile;

    @FindBy(id="username")
    public WebElement username;

    @FindBy(id="email")
    public WebElement email;

    @FindBy(id="firstPassword")
    public WebElement  firstpassword;

    @FindBy(id="secondPassword")
    public WebElement secondPassword;

    @FindBy(id="register-submit")
    public WebElement registerButton;


    @FindBy(id=" (//div[@class='invalid-feedback'])[1]")
    public WebElement ssnError;

    @FindBy(id=" (//div[@class='invalid-feedback'])[2]")
    public WebElement firstnameError;

    @FindBy(id=" (//div[@class='invalid-feedback'])[3]")
    public WebElement lastNameError;

    @FindBy(id=" (//div[@class='invalid-feedback'])[4]")
    public WebElement addressError;

    @FindBy(id=" (//div[@class='invalid-feedback'])[5]")
    public WebElement phoneError;

    @FindBy(id=" (//div[@class='invalid-feedback'])[6]")
    public WebElement usernameError;

    @FindBy(id=" (//div[@class='invalid-feedback'])[7]")
    public WebElement emailError;

    @FindBy(id=" (//div[@class='invalid-feedback'])[8]")
    public WebElement firstpasswordError;

    @FindBy(id=" (//div[@class='invalid-feedback'])[9]")
    public WebElement secondpasswordError;



}
