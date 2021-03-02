package gmibank.pages;

import gmibank.utilities.ConfigurationReader;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends BasePage {


    @FindBy(xpath = "//*[text()='Sign in']")
    public WebElement signInButton;

    @FindBy(id = "username")
    public WebElement username;

    @FindBy( id ="password")
    public WebElement password;

    @FindBy(xpath = "//*[@class='btn btn-primary']")
    public WebElement loginButton;

    public void login() {
        String usernameValue = ConfigurationReader.getProperty("username");
        String passwordValue = ConfigurationReader.getProperty("password");
        username.sendKeys(usernameValue);
        password.sendKeys(passwordValue, Keys.ENTER);
    }
    public void login(String usernameValue, String passwordValue) {
        username.sendKeys(usernameValue);
        password.sendKeys(passwordValue, Keys.ENTER);
    }
    public void login(String role){
        String userName = "";
        if (role.equalsIgnoreCase("t37admin")){
            userName = "t37admin";
        }else if (role.equalsIgnoreCase("t37manager")){
            userName = "t37manager";
        }else if (role.equalsIgnoreCase("t37employee")){
            userName = "t37employee";
        }else if (role.equalsIgnoreCase("t37customer")){
            userName = "t37customer";
        }else if (role.equalsIgnoreCase("t37user")){
            userName = "t37user";
        }else {
            throw new RuntimeException("Invalid role!");
        }
        System.out.println("Login as "+role);
        login(userName, "12345As!");
    }
}
