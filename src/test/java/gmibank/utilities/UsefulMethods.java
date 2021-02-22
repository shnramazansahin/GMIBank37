package gmibank.utilities;

import org.openqa.selenium.WebElement;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class UsefulMethods {

    public static boolean isValidEmailAddress(String email) {

        String ePattern = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$";
        java.util.regex.Pattern p = java.util.regex.Pattern.compile(ePattern);
        java.util.regex.Matcher m = p.matcher(email);
        return m.matches();
    }

     public static boolean isValidPhoneNumber(String s) {
            String regex = "\\d{3}-\\d{3}-\\d{4}"; // XXX-XXX-XXXX
            return s.matches(regex);
        }


    public static boolean isValidSSN(String str)
    {
        // Regex to check SSN
        // (Social Security Number).
        String regex = "^(?!666|000|9\\d{2})\\d{3}"
                + "-(?!00)\\d{2}-"
                +"(?!0{4})\\d{4}$";

        // Compile the ReGex
        Pattern p = Pattern.compile(regex);

        // If the string is empty
        // return false
        if (str == null)
        {
            return false;
        }

        // Pattern class contains matcher()
        //  method to find matching between
        //  given string and regular expression.
        Matcher m = p.matcher(str);

        // Return if the string
        // matched the ReGex
        return m.matches();
    }
    public static List<String> getTextFromWebElements(List<WebElement> elements) throws InterruptedException {
        List<String> textValues = new ArrayList<>();
        for (WebElement element : elements) {
            if (!element.getText().isEmpty()) {
                textValues.add(element.getText());
            }
        }
        return textValues;
    }

}
