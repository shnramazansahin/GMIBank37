package gmibank.stepdefinations;

import gmibank.utilities.ExcelUtil;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class trya {
    public static void main(String[] args) {
      //   System.out.println(previousDays(2));
//        LocalDateTime now = LocalDateTime.now();
//        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("MM/dd/yyyy");
//        System.out.println(dateTimeFormatter.format(now.minusDays(3)));
//
        ExcelUtil excelUtil = new ExcelUtil("src/test/java/Source/Roles and Passwords.xlsx","Sheet1");

       String ex= excelUtil.getCellData(1,2);
        System.out.println(ex);
        for(int i =0;i< excelUtil.rowCount();i++){
          for(int j=0;j< excelUtil.columnCount();j++) {
              if(excelUtil.getCellData(i,j).equals("admin")) {
                  System.out.println(excelUtil.getCellData(i,j));
              }
              else {

              }
          }
        }


    }

   public static String previousDays(int day) {
    LocalDateTime now = LocalDateTime.now();
    DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("MM/dd/yyyy 'T' HH:mm:ss 'Z'");
    return   dateTimeFormatter.format(now.minusDays(day));

       }
    }
