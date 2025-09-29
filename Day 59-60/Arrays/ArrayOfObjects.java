import java.util.Arrays;
import java.util.Scanner;

public class ArrayOfObjects {
  public static void main(String[] args) {
    
    Scanner in = new Scanner(System.in);

    String[] arr = new String[4];

    System.out.println("ENter names:");
    // array of objects
    for(int i=0; i<arr.length; i++) {
      arr[i] = in.next();
    }

    // arr[2] = "Zeeshan";

    System.out.println(Arrays.toString(arr));

    in.close();
  }
}
