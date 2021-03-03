package gmibank.pages;

public class  Main2 {
    public static void main(String[] args) {

        String c= "1234567890";
        System.out.println(phone(c));


    }
    public static  String phone(String cell) {
        String output = cell.substring( 0,3 ) + "-" + cell.substring( 3,6 ) + "-" + cell.substring( 6,10 );
        return output;
    }

}

