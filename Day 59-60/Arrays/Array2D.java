import java.util.Arrays;
import java.util.Scanner;

public class Array2D {

  public static void main(String[] args) {

    /*
     * 1 2 3
     * 4 5 6
     * 7 8 9
     */

    Scanner in = new Scanner(System.in);

    // number of rows are mandatory, but column are not.
    // int[][] arr = new int[3][]

    // int[][] arr = { // length of this arr => 3 (row)
    // { 1, 2, 3 },
    // { 4, 5, 6 },
    // { 7, 8, 9 }
    // };

    // System.out.println(arr[1][1]);
    // System.out.println(Arrays.toString(arr[1]));

    // ---- JAGGED ARRAY -------------
    // int[][] arr = new int[3][]
    // int[][] arr = {
    // { 1, 2, 3 }, // 0th index
    // { 4, 5 }, // 1st index
    // { 7, 8, 9, 3,} // 2nd index
    // };

    int[][] arr = new int[3][3];

    System.out.println("Enter 2D array element of size 3x3");
    for (int row = 0; row < 3; row++) {
      for (int col = 0; col < arr[row].length; col++) {
        arr[row][col] = in.nextInt();
      }
    }

    for (int row = 0; row < arr.length; row++) {
      System.out.println(Arrays.toString(arr[row]));
    }

    // for (int row = 0; row < arr.length; row++) {
    //   for (int col = 0; col < arr[row].length; col++) {
    //     System.out.print(arr[row][col] + " ");
    //   }
    //   System.out.println();
    // }

    in.close();
  }
}