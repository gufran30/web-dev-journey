import java.util.Arrays;

public class SearchIn2D {
  public static void main(String[] args) {

    int[][] arr = {
        { 19, 3242, 312 },
        { 43, 53, 26 },
        { 7, 843, 93}
    };

    // int target = 6;
    // int[] ans = findElementIn2D(arr, target);
    // System.out.println(Arrays.toString(ans));

    System.out.println(findMinIn2D(arr));
  }

  static int[] findElementIn2D(int[][] arr, int target) {
    
    for(int row = 0; row < arr.length; row++) {
      for(int col = 0; col < arr[row].length; col++) {
        if(arr[row][col] == target) {
          return new int[] {row, col};
        }
      }
    }
    return new int[] {-1,-1};
  }

  static int findMinIn2D(int[][] arr) {

    if(arr.length == 0) return -1;


    int minValue = Integer.MAX_VALUE;
    for(int i=0; i<arr.length; i++) {
      for(int j=0; j<arr[i].length; j++) {
        if(arr[i][j] < minValue) minValue = arr[i][j];
      }
    }
    return minValue;
  }

}
