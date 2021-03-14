package gmibank.utilities;


import gmibank.pojos.*;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class WriteToTxt {

    public static void saveDataInFile(String fileName, Customer[] customers) {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));
            for (int i = 0; i < customers.length; i++)

                writer.append(customers[i].getSsn() + ",\n");

            writer.close();
        } catch (Exception e) {

        }
    }

    public static void saveDataInFileWithCountryId(String fileName, Country[] countries) {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));
            for (int i = 0; i < countries.length; i++)

                writer.append(countries[i].getId() + "\n");

            writer.close();
        } catch (Exception e) {

        }
    }

    public static void saveDataInFileWithSSN(String fileName, Customer customer) {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));

            writer.append(customer.getSsn());

            writer.close();
        } catch (Exception e) {

        }
    }

    public static void saveDataInFileWithSSN(String fileName, Customer[] customers) {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));

            for (int i = 0; i < customers.length; i++) {
                writer.append(customers[i].getSsn() + "\n");
            }


            writer.close();
        } catch (Exception e) {

        }
    }

    public static void saveDataInFileWithApplicantSSN(String fileName, NewApplicant[] newApplicants) {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));

            for (int i = 0; i < newApplicants.length; i++) {
                writer.append(newApplicants[i].getSSN() + "\n");
            }


            writer.close();
        } catch (Exception e) {

        }
    }

    public static void saveDataInFileWithUserInfo(String fileName, Customer customer) {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));

            writer.append(customer.getUser().getFirstName());

            writer.close();
        } catch (Exception e) {

        }
    }

    public static void saveDataInFileWithAllCustomerInfo(String fileName, Customer[] customers) {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));


            for (int i = 0; i < customers.length; i++) {

                writer.append(customers[i].getFirstName() + " , " + customers[i].getLastName() + "\n");
                if (customers[i].getUser() != null)
                    writer.append(customers[i].getUser().getFirstName());
                if (customers[i].getCountry() != null)
                    writer.append(customers[i].getCountry().getName());

            }

            writer.close();
        } catch (Exception e) {

        }
    }
//    public static void saveDataInFileWithAllCustomerInfo(String fileName, Customer customers) {
//        try {
//            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));
//
//
//            for (int i = 0; i < customers.toString().length(); i++) {
//
//                writer.append(customers + " , " + customers.getLastName() + "\n");
//                if (customers.getUser() != null)
//                    writer.append(customers[i].getUser().getFirstName());
//                if (customers[i].getCountry() != null)
//                    writer.append(customers[i].getCountry().getName());
//
//            }
//
//            writer.close();
//        } catch (Exception e) {
//
//        }

    public static void saveAllStates(String fileName, States[] states) {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));

            for (int i = 0; i < states.length; i++)
                writer.append(states[i].getName() + " , " + states[i].getId() + "\n");

            writer.close();
        } catch (Exception e) {

        }
    }


    public static void saveAllStates2(String fileName, States[] states) {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));

            for (int i = 0; i < states.length; i++)
                writer.append(states[i].getName() + " , " + states[i].getId() + "\n");

            writer.close();
        } catch (Exception e) {

        }
    }


    public static void saveAllCustomers(String fileName, Customer[] customers) {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));

            for (int i = 0; i < customers.length; i++) {
                writer.append(customers[i].getSsn() + "," + customers[i].getFirstName() + ",");
                if (customers[i].getCountry() != null)
                    writer.append(customers[i].getCountry().getName() + "," + customers[i].getCountry().getId() + ",\n");
            }
            writer.close();
        } catch (Exception e) {

        }
    }

    public static void saveAllCustomer(String fileName, Customer customer, String password, String username) {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));


            writer.append(password + "," + username + "," + customer.getFirstName() + ",");
            writer.append(customer.getLastName() + "," + customer.getSsn() + ",");
            writer.append(customer.getAddress() + "," + customer.getEmail() + "," + customer.getMobilePhoneNumber() + "\n");


            writer.close();
        } catch (Exception e) {

        }
    }

    public static void saveAllCustomers(String fileName, Customer[] customers, String password, String username) {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));

            for (int i = 0; i < customers.length; i++) {


                writer.append(password + "," + username + "," + customers[i].getFirstName() + ",");
                writer.append(customers[i].getLastName() + "," + customers[i].getSsn() + ",");
                writer.append(customers[i].getAddress() + "," + customers[i].getEmail() + "," + customers[i].getMobilePhoneNumber() + "\n");

            }
            writer.close();
        } catch (Exception e) {

        }
    }

    public static List<NewApplicant> saveAllNewApplicants(String fileName, NewApplicant[] newApplicants) {
        List<NewApplicant> allApplicantsInfo = new ArrayList<>();
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, false));

            for (int i = 0; i < newApplicants.length; i++) {


                writer.append(newApplicants[i].getSSN() + "," + newApplicants[i].getFirstName() + ",");
                writer.append(newApplicants[i].getLastName() + ",");
                writer.append(newApplicants[i].getAddress() + "," + newApplicants[i].getMobilePhoneNumber() + "," + newApplicants[i].getEmail() + "\n");

            }
            writer.close();
        } catch (Exception e) {

        }

        return allApplicantsInfo;
    }

    public static void saveDataInFileWithAllCustomerInfos(String fileName, Customer[] customers) {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));


            for (int i = 0; i < customers.length; i++) {

                writer.append(customers[i].getId() + "," + customers[i].getFirstName() + "," + customers[i].getLastName() + ",");
                writer.append(customers[i].getMiddleInitial() + "," + customers[i].getEmail() + ",");
                writer.append(customers[i].getMobilePhoneNumber() + "," + customers[i].getPhoneNumber() + ",");
                writer.append(customers[i].getZipCode() + "," + customers[i].getAddress() + "," + customers[i].getCity() + "," + customers[i].getSsn() + ",");
                writer.append(customers[i].getCreateDate() + "," + customers[i].isZelleEnrolled() + "\n");
                if (customers[i].getCountry() != null)
                    writer.append(customers[i].getCountry().getName());
                if (customers[i].getUser() != null)
                    writer.append(customers[i].getUser().getFirstName());
                if (customers[i].getAccounts() != null)
                    writer.append(customers[i].getAccounts().getDescription());

            }

            writer.close();
        } catch (Exception e) {

        }
    }

    public static void saveAllCustomersComingFromDB(String fileName, List<Object> allCustomer) {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, false));

            for (int i = 0; i < allCustomer.size(); i++) {
                writer.append(allCustomer.get(i) + "\n");

            }
            writer.close();
        } catch (Exception e) {

        }
    }


    public static void saveDifferentInfoFromDB(String fileName, List<Object> data) {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, false));

            for (int i = 0; i < data.size(); i++) {
                writer.append(data.get(i) + "\n");

            }
            writer.close();
        } catch (Exception e) {

        }
    }


    public static void saveAccountInfo(String fileName, String description) {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));


            writer.append(description + ",\n");


            writer.close();
        } catch (Exception e) {

        }
    }

    public static void saveCustomerInfo(List<String> items) {

        String fileLocation = "location";
        try {

            BufferedWriter writer = new BufferedWriter(new FileWriter(fileLocation, true));
            for (int i = 0; i < items.size(); i++) {
                writer.append(items.get(i) + "\n");
            }


        } catch (Exception e) {

        }


    }

}