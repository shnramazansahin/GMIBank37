package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

public abstract class BasePage {

    protected WebDriver driver = Driver.getDriver();
    protected WebDriverWait wait = new WebDriverWait(driver, 10);

    public BasePage() {

        PageFactory.initElements(driver, this);
    }
    public void getTitle(String title){

        driver.getTitle().equalsIgnoreCase(title);

    }
}
