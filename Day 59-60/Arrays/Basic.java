import java.util.Arrays;
import java.util.Scanner;

public class Basic {

  public static void main(String[] args) {

    int[] arr = new int[5];
    // arr[0] = 23;
    // arr[1] = 35;
    // arr[2] = 54;
    // arr[3] = 324;
    // arr[4] = 43
    // System.out.println(arr[3]);


    Scanner sc = new Scanner(System.in);
    
    System.out.println("Enter arrays: ");

    for(int i=0; i<arr.length; i++) {
      arr[i] = sc.nextInt();
    }

    // normal for loop
    for(int i=0; i<arr.length; i++) {
      System.out.print(arr[i] + " ");
    }

    // for each loop
    for(int num: arr) {   // for every element in array, print the element
      System.out.println(num + " "); // here num represent element of an array
    }

    System.out.println(Arrays.toString(arr));;

    sc.close();
  }
}