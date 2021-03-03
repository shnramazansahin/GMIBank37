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

    @FindBy(xpath="//span[contains(.,'My Operations')]")
    public WebElement myOppertaion;

    @FindBy(xpath="//span[contains(.,'Manage Accounts')]")
    public WebElement manageAccounts;

    @FindBy(xpath="//span[contains(.,'Manage Customers')]")
    public WebElement manageCustomers;

    @FindBy(xpath="//span[contains(.,'User management')]")
    public WebElement userManagementButton;

    @FindBy(xpath="//span[contains(.,'Administration')]")
    public WebElement AdministrationButton;

    @FindBy(xpath=" //span[contains(.,'Sign out')]")
    public WebElement signOut;







}
