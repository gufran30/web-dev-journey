import java.util.Arrays;

public class Questions {
  public static void main(String[] args) {

    int[] arr = { 1, 3, 23, 55, 8, 18 };
    // System.out.println(Arrays.toString(arr));
    // swap(arr, 1, 3);
    // System.out.println(Arrays.toString(arr));

    // System.out.println(maxElement(arr));
    // System.out.println(maxElementInRange(arr, 1, 4));
    reverseArray(arr);
    System.out.println(Arrays.toString(arr));


  }

  static void swap(int[] arr, int a, int b) {
    int temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  static int maxElement(int[] arr) {
    int max = arr[0];
    for (int i = 0; i < arr.length; i++) {
      if (arr[i] > max)
        max = arr[i];
    }
    return max;
  }

  static int maxElementInRange(int[] arr, int start, int end) {

    // edge cases
    if (end > start)
      return -1;
    if (arr == null)
      return -1;
    if (arr.length == 0)
      return -1;

    // u can combine them
    // if((end > start) || (arr == null) || (arr.length == 0)) return -1;

    int max = arr[start];
    for (int i = start; i <= end; i++) {
      if (arr[i] > max)
        max = arr[i];
    }
    return max;
  }

  static void reverseArray(int[] arr) {
    int start = 0, end = arr.length - 1;
    while (start < end) {
      int temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;

      start++;
      end--;
    }
  }

}
