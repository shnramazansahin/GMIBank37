package gmibank.stepdefinations;

import gmibank.pojos.User;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.ReadTxt;

import java.util.List;

public class main {
    public static void main(String[] args) {
        List<User> users = ReadTxt.returnAWholeUser(ConfigurationReader.getProperty("fileNameOfCustomer"));

//        String size=users.get(users.size()).getSsn() ;
//        String ssn=users.get(users.size()-1).getSsn();
//        System.out.println(ssn);
       // System.out.println(size);
    }
}
