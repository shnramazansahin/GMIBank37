package gmibank.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;

import java.util.List;

public class UserManagementPage extends BasePage {

    @FindBy(id="admin-menu")
    public WebElement administrationDropdown;

    @FindBy(xpath = "//*[text()='User management']")
    public WebElement userManagementButton;

    @FindAll({@FindBy(xpath = "//*[@class='page-item']")})
    public List<WebElement> allPages ;

    @FindBy(xpath = "//a[contains(text(),'»»')]")
    public WebElement lastPageButton;

    @FindAll({@FindBy(xpath = "//table/tbody/tr/td[2]")})
    public List<WebElement> allUsers ;

    @FindAll({@FindBy(xpath = "//table/tbody/tr/td[4]")})
    public List<WebElement> userActivations ;

    @FindBy(id ="account-menu")
    public WebElement accountMenu;

    @FindBy(xpath="//span[contains(text(),'Sign out')]")
    public WebElement signOutButton;

    @FindBys({@FindBy(xpath = "//table/tbody/tr")})
    public List<WebElement> allUsersInLastPage;
    //tbody//following::tr//button[1]

}
