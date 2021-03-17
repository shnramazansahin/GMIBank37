package gmibank.utilities;

import com.github.javafaker.Faker;
import com.sun.xml.xsom.impl.scd.Iterators;
import gmibank.pojos.Country;
import gmibank.pojos.NewApplicant;
import gmibank.pojos.User;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.LineNumberReader;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class UsefulMethods {
    public static Faker faker=new Faker();


    public static Map<String, String> stateAbbreviationDictionary = new HashMap<>();

    static {
        stateAbbreviationDictionary.put("AL", "Alabama");
        stateAbbreviationDictionary.put("AK", "Alaska");
        stateAbbreviationDictionary.put("AZ", "Arizona");
        stateAbbreviationDictionary.put("AR", "Arkansas");
        stateAbbreviationDictionary.put("CA", "California");
        stateAbbreviationDictionary.put("CO", "Colorado");
        stateAbbreviationDictionary.put("CT", "Connecticut");
        stateAbbreviationDictionary.put("DE", "Delaware");
        stateAbbreviationDictionary.put("DC", "District Of Columbia");
        stateAbbreviationDictionary.put("FL", "Florida");
        stateAbbreviationDictionary.put("GA", "Georgia");
        stateAbbreviationDictionary.put("HI", "Hawaii");
        stateAbbreviationDictionary.put("ID", "Idaho");
        stateAbbreviationDictionary.put("IL", "Illinois");
        stateAbbreviationDictionary.put("IN", "Indiana");
        stateAbbreviationDictionary.put("IA", "Iowa");
        stateAbbreviationDictionary.put("KS", "Kansas");
        stateAbbreviationDictionary.put("KY", "Kentucky");
        stateAbbreviationDictionary.put("LA", "Louisiana");
        stateAbbreviationDictionary.put("ME", "Maine");
        stateAbbreviationDictionary.put("MD", "Maryland");
        stateAbbreviationDictionary.put("MA", "Massachusetts");
        stateAbbreviationDictionary.put("MI", "Michigan");
        stateAbbreviationDictionary.put("MN", "Minnesota");
        stateAbbreviationDictionary.put("MS", "Mississippi");
        stateAbbreviationDictionary.put("MO", "Missouri");
        stateAbbreviationDictionary.put("MT", "Montana");
        stateAbbreviationDictionary.put("NE", "Nebraska");
        stateAbbreviationDictionary.put("NV", "Nevada");
        stateAbbreviationDictionary.put("NH", "New Hampshire");
        stateAbbreviationDictionary.put("NJ", "New Jersey");
        stateAbbreviationDictionary.put("NM", "New Mexico");
        stateAbbreviationDictionary.put("NY", "New York");
        stateAbbreviationDictionary.put("NC", "North Carolina");
        stateAbbreviationDictionary.put("ND", "North Dakota");
        stateAbbreviationDictionary.put("OH", "Ohio");
        stateAbbreviationDictionary.put("OK", "Oklahoma");
        stateAbbreviationDictionary.put("OR", "Oregon");
        stateAbbreviationDictionary.put("PA", "Pennsylvania");
        stateAbbreviationDictionary.put("RI", "Rhode Island");
        stateAbbreviationDictionary.put("SC", "South Carolina");
        stateAbbreviationDictionary.put("SD", "South Dakota");
        stateAbbreviationDictionary.put("TN", "Tennessee");
        stateAbbreviationDictionary.put("TX", "Texas");
        stateAbbreviationDictionary.put("UT", "Utah");
        stateAbbreviationDictionary.put("VT", "Vermont");
        stateAbbreviationDictionary.put("VA", "Virginia");
        stateAbbreviationDictionary.put("WA", "Washington");
        stateAbbreviationDictionary.put("WV", "West Virginia");
        stateAbbreviationDictionary.put("WI", "Wisconsin");
        stateAbbreviationDictionary.put("WY", "Wyoming");
    }


    public static boolean isValidEmailAddress(String email) {

        String ePattern = "^[^.][a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$";
        Pattern p = Pattern.compile(ePattern);
        Matcher m = p.matcher(email);
        return m.matches();
    }

    public static boolean isValidPhoneNumber(String phoneNumber) {
        String regex = "\\d{3}-\\d{3}-\\d{4}"; // XXX-XXX-XXXX
        return phoneNumber.matches(regex);
    }


    public static boolean isValidSSN(String str) {
        // Regex to check SSN
        // (Social Security Number).
        String regex = "^(?!666|000|9\\d{2})\\d{3}"
                + "-(?!00)\\d{2}-"
                + "(?!0{4})\\d{4}$";

        // Compile the ReGex
        Pattern p = Pattern.compile(regex);

        // If the string is empty
        // return false
        if (str == null) {
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

    public static boolean isValidAddress(String address) {

        String regex = "\\d+\\s+([a-zA-Z]+|[a-zA-Z]+\\s[a-zA-Z]+)";
        return address.matches(regex);

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

    public static void selectByIndex(WebElement element, int index) {
        Select objSelect = new Select(element);
        List<WebElement> elementCount = objSelect.getOptions();
        objSelect.selectByIndex(index);
        //  System.out.println("number of elements: " + elementCount.size());
    }

    public static boolean compareTwoObjectList(List<Object> list1, List<Object> list2) {

        boolean flag = false;
        int counter = 0;
        for (int i = 0; i < list1.size(); i++) {
            for (int j = 0; j < list2.size(); j++) {

                if (list1.get(i).toString().equalsIgnoreCase(list2.get(j).toString())) {
                    counter++;
                     System.out.println("Expected list element = "+list1.get(i).toString());
                     System.out.println("Actual list element = "+list2.get(j).toString());
//                      System.out.println("counter = " + counter);
                    break;
                }
            }

        }
        //System.out.println("counter before if = " + counter);
        if (counter >= list1.size()) {
            flag = true;

        }
        return flag;

    }
    public static boolean compareTwoObjectListForNewApplicants(List<Object> list1, List<NewApplicant> list2) {
        boolean flag = false;
        int counter = 0;
        for (int i = 0; i < list1.size(); i++) {
            String ssn= (String) list1.get(i);
            for (int j = 0; j < list2.size(); j++) {
                if (ssn==list2.get(j).getSSN()) {
                     System.out.println("Expected list element = "+ssn);
                     System.out.println("Actual list element = "+list2.get(j).toString());
                counter++;
                break;
                }
            }
        }
        if (counter == list1.size()) {
            flag = true;

        }

        return flag;

    }

    public static int[] randomNumbers(int upperLimit) {

        int[] randomize = new int[5];
        Random objGenerator = new Random();
        for (int iCount = 0; iCount < 5; iCount++) {
            int randomNumber = objGenerator.nextInt(upperLimit);
            randomize[iCount] = randomNumber;
        }
        return randomize;
    }

    public static int getNumberOfLinesInAFile(String filePath) {
        int result = 0;
        try {
            FileReader input = new FileReader(filePath);

            LineNumberReader count = new LineNumberReader(input);

            while (count.skip(Integer.MAX_VALUE) > 0) {
                // Loop just in case the file is > Long.MAX_VALUE or skip() decides to not read the entire file
            }

            result = count.getLineNumber() + 1;  // +1 because line index starts at 0

        } catch (Exception e) {

        }
        return result;
    }

    public static Map<String,Object> createACustomerWithAPI(String firstName, String lastName, String middleInitial,
                                         String email, String mobilePhoneNumber,String address,String ssn ){

        Map<String,Object> createCustomer=new HashMap<>();


        firstName=faker.name().firstName();
        lastName=faker.name().lastName();
        middleInitial=faker.name().firstName().substring(0,1);
        email=firstName+lastName+"@gmail.com";
        mobilePhoneNumber=faker.phoneNumber().toString();
        address=faker.address().streetAddress();
        ssn= faker.idNumber().ssnValid();


        createCustomer.put("firstName",firstName);
        createCustomer.put("lastName",lastName);
        createCustomer.put("middleInitial",middleInitial);
        createCustomer.put("email",email);
        createCustomer.put("mobilePhoneNumber",mobilePhoneNumber);
        createCustomer.put("address",address);
        createCustomer.put("ssn",ssn);

        return createCustomer;
    }

}
