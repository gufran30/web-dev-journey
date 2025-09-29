public class minElement {
  public static void main(String[] args) {

    int[] arr = { 243, 23, 5, 23, 45, 21, 34 };

    System.out.println(findMinimumElement(arr));

  }

  static int findMinimumElement(int[] arr) {
    int minValue = Integer.MAX_VALUE;
    for (int i = 0; i < arr.length; i++) {
      if (arr[i] < minValue)
        minValue = arr[i];
    }
    return minValue;
  }
}
