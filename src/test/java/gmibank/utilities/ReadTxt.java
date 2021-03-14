package gmibank.utilities;

import gmibank.pojos.*;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;

public class ReadTxt {


    public static List<Customer> returnCustomer(String filePath) {
        List<Customer> all = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(ConfigurationReader.getProperty(filePath)))) {
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();

            while (line != null) {
                Customer customer = new Customer();
                sb.append(line);
                sb.append(System.lineSeparator());
                line = br.readLine();
                String[] each = line.split(",");
                customer.setFirstName(each[0]);
                customer.setLastName(each[1]);
                customer.setSsn(each[2]);
                all.add(customer);
            }
            String everything = sb.toString();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return all;
    }


    public static List<Customer> returnCustomerSNN(String filePath) {
        List<Customer> all = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();
            System.out.println(line);
            int i = 0;
            while (line != null) {
                Customer customer = new Customer();
                customer.setSsn(line.split(",")[0]);
                sb.append(System.lineSeparator());
                line = br.readLine();

                System.out.println(i++);

                all.add(customer);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return all;
    }

    public static List<Customer> readTxtData(String filePath) throws Exception {
        List<Customer> list = new ArrayList<>();
        BufferedReader br = new BufferedReader(new FileReader(filePath));
        try {
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();
            Customer customer = new Customer();
            while (line != null) {
                sb.append(line);
                sb.append(System.lineSeparator());
                line = br.readLine();
//                customer.setSsn(line);

            }
            String everything = sb.toString();

            customer.setSsn(everything);
            list.add(customer);
        } finally {
            br.close();
        }
        return list;

    }

    public static List<Country> readTxtDataWithCountryId(String filePath) throws Exception {
        List<Country> list = new ArrayList<>();
        BufferedReader br = new BufferedReader(new FileReader(filePath));
        try {
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();
            Country country = new Country();
            while (line != null) {
                sb.append(line);
                sb.append(System.lineSeparator());
                line = br.readLine();
//                customer.setSsn(line);

            }
            String everything = sb.toString();
            int stringId = Integer.valueOf(everything);

            country.setId(stringId);
            list.add(country);
        } finally {
            br.close();
        }
        return list;

    }

    public static List<States> returnAllStates(String filePath) {
        List<States> all = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();
            System.out.println(line);
            int i = 0;
            while (line != null) {
                States state = new States();
                String[] allLine = line.split(",");

                int id = Integer.parseInt(allLine[1].trim());
                state.setId(id);
                state.setName(allLine[0]);
                sb.append(System.lineSeparator());
                line = br.readLine();

                System.out.println(i++);

                all.add(state);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return all;
    }

    public static List<String> returnCustomerSSNList(String filePath) {
        List<String> all = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();
            System.out.println(line);
            int i = 0;
            while (line != null) {
                Customer customer = new Customer();
                customer.setSsn(line.split(",")[0]);
                sb.append(System.lineSeparator());
                line = br.readLine();

                System.out.println(i++);

                all.add(customer.getSsn());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return all;
    }

    public static List<String> returnRegistrantsSSNList(String filePath) {
        List<String> all = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();
            // System.out.println(line);
            int i = 0;
            while (line != null) {
                Customer customer = new Customer();
                customer.setSsn(line.split(",")[4]);
                sb.append(System.lineSeparator());
                line = br.readLine();

                // System.out.println(i++);

                all.add(customer.getSsn());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return all;
    }


    public static List<States> returnAllStates2(String filePath) {
        List<States> all = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();
            System.out.println(line);
            int i = 0;
            while (line != null) {
                States states = new States();
                states.setName(line.split(",")[0].trim());
                states.setId(Integer.parseInt(line.split(",")[1].trim()));
                sb.append(System.lineSeparator());
                line = br.readLine();

                System.out.println(i++);

                all.add(states);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return all;
    }

    public static List<String> returnAllStates3(String filePath) {
        List<String> all = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();
            System.out.println(line);
            int i = 0;
            while (line != null) {
                String temp = "";
                temp = line.split(",")[0].trim();

                sb.append(System.lineSeparator());
                line = br.readLine();

                System.out.println(i++);

                all.add(temp);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return all;
    }


    public static List<String> returnAllCustomersSSNs(String filePath) {
        List<String> allSSNIds = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();
//            System.out.println(line);
            int i = 0;
            while (line != null) {
                String temp = "";
                temp = line.split(",")[0].trim();

                sb.append(System.lineSeparator());
                line = br.readLine();

                System.out.println(i++);

                allSSNIds.add(temp);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return allSSNIds;
    }

    public static List<String> returnAllCountriesId(String filePath) {
        List<String> allCountryIds = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();
//            System.out.println(line);
            int i = 0;
            while (line != null) {
                String temp = "";
                temp = line.split(",")[0].trim();

                sb.append(System.lineSeparator());
                line = br.readLine();
                i++;
                //   System.out.println(i++);

                allCountryIds.add(temp);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return allCountryIds;
    }

    public static List<Customer> returnAllCustomers(String filePath) {
        List<Customer> AllCustomerInfo = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();
//            System.out.println(line);
            int i = 0;
            while (line != null) {
                Customer customer = new Customer();
                String temp = "";
                temp = line.split(",")[0].trim();

                sb.append(System.lineSeparator());
                line = br.readLine();

                System.out.println(i++);
                customer.setSsn(temp);
                AllCustomerInfo.add(customer);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return AllCustomerInfo;
    }

    public static Customer returnAllCustomer(String filePath) {
        Customer customer = new Customer();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();
//            System.out.println(line);
            int i = 0;
            while (line != null) {

                String temp = "";
                customer.setSsn(line.split(",")[4].trim());
                customer.setEmail(line.split(",")[6].trim());
                customer.setAddress(line.split(",")[5].trim());
                customer.setFirstName(line.split(",")[2].trim());
                sb.append(System.lineSeparator());
                line = br.readLine();

                System.out.println(i++);


            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return customer;
    }

    public static List<String> returnAllCustomerCredentials(String filePath) {
        List<String> list = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();
//            System.out.println(line);
            int i = 0;
            while (line != null) {

                String username = line.split(",")[1].trim();
                String password = line.split(",")[0].trim();
                list.add(password);
                list.add(username);
                sb.append(System.lineSeparator());
                line = br.readLine();

                System.out.println(i++);


            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }


    public static List<Object> returnAllCustomerIds(String filePath) {
        List<Object> list = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();
//            System.out.println(line);
            int i = 0;
            while (line != null) {

                String id = line.split(",")[0].trim();

                list.add(id);
                sb.append(System.lineSeparator());
                line = br.readLine();


            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }


    public static List<Object> returnAllComingFromDB(String filePath) {
        List<Object> list = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();
//            System.out.println(line);
            int i = 0;
            while (line != null) {

                String id = line.split(",")[0].trim();

                list.add(id);
                sb.append(System.lineSeparator());
                line = br.readLine();


            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    public static List<Object> returnFiveItemsComingFromDB(String filePath) {

        List<Object> list = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();
//            System.out.println(line);
            int i = 0;
            int counter = 0;
            while (line != null && counter < 5) {
                //       System.out.println("line = " + line);
                String item = line.trim();
                //        System.out.println("id in list construction = " + item);
                list.add(item);
                sb.append(System.lineSeparator());
                line = br.readLine();


                counter++;

            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    public static List<Object> returnRandomFiveItemsComingFromDB(String filePath) {
        int lineCounter = 0;
        boolean flag = false;
        int numberOfLInes = UsefulMethods.getNumberOfLinesInAFile(filePath);
        //System.out.println("numberOfLInes = " + numberOfLInes);
        int[] randomize = UsefulMethods.randomNumbers(numberOfLInes);
        List<Object> list = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();
//            System.out.println(line);

            int counter = 0;
            while (line != null && counter < numberOfLInes) {
                for (int i = 0; i < randomize.length; i++) {
                    //System.out.println("randomize[i] = " + randomize[i]);
                    //System.out.println("lineCounter = " + lineCounter);
                    if (randomize[i] == lineCounter) {
                        flag = true;
                        break;
                    }
                    //break;
                }
                if (flag == true) {

                    String item = line.trim();
                    list.add(item);
                    sb.append(System.lineSeparator());
                    flag = false;
                }

                line = br.readLine();
                lineCounter++;

                counter++;

            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    public static List<User> returnAWholeUser(String filePath) {
        List<User> all = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();

            int i = 0;
            while (line != null) {
                User customer = new User();

                customer.setPassword(line.split(",")[0].trim());
                customer.setUsername(line.split(",")[1].trim());
                customer.setFirstName(line.split(",")[2].trim());
                customer.setLastName(line.split(",")[3].trim());
                customer.setSsn(line.split(",")[4].trim());
                customer.setAddress(line.split(",")[5].trim());
                customer.setEmail(line.split(",")[6].trim());
                customer.setPhoneNumber(line.split(",")[6].trim());
                sb.append(System.lineSeparator());
                line = br.readLine();


                all.add(customer);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return all;
    }

    public static List<NewApplicant> returnAWholeApplicant(String filePath) {
        List<NewApplicant> all = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();

            int i = 0;
            while (line != null) {
                NewApplicant newApplicant = new NewApplicant();

                System.out.println("line  in new applicant = " + line);
                newApplicant.setSSN(line.split(",")[0].trim());
                newApplicant.setFirstName(line.split(",")[1].trim());
                newApplicant.setLastName(line.split(",")[2].trim());
                newApplicant.setAddress(line.split(",")[3].trim());
                newApplicant.setMobilePhoneNumber(line.split(",")[4].trim());
                newApplicant.setEmail(line.split(",")[5].trim());

                sb.append(System.lineSeparator());
                line = br.readLine();


                all.add(newApplicant);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        System.out.println("all.size() = " + all.size());
        return all;
    }

    public static List<Object> returnAllSSNForNewApplicants(String filePath) {
        List<Object> list = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();
//            System.out.println(line);
            int i = 0;
            while (line != null) {

                String ssn = line.split(",")[0].trim();

                list.add(ssn);
                sb.append(System.lineSeparator());
                line = br.readLine();


            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    public static List<String> returnAllAccounts(String filePath) {
        List<String> list = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();
//            System.out.println(line);

            while (line != null) {


                String accountDescription = line.split(",")[0].trim();
                list.add(accountDescription);
                sb.append(System.lineSeparator());
                line = br.readLine();

            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
}
