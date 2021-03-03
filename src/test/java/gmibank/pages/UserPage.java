package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class UserPage {
     public UserPage() {
         PageFactory.initElements(Driver.getDriver(),this);
     }

    @FindBy(id="jh-create-entity")
    public WebElement CreateButton;
//    @FindBy(xpath = "//*[text()='Create a new Customer']")
//    public WebElement CreateButton;

    @FindBy(xpath="(//li[@class='page-item'])[6]")
    public WebElement lastPageButton;

    @FindBy(xpath="(//span[contains(.,'Deactivated')])[last()]")
    public WebElement deactivatedLast;

    @FindBy(xpath="//span[contains(.,'Create or edit a Account')]")
    public WebElement sout;




}
