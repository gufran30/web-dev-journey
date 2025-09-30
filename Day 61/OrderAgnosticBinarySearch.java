// Order agnostic means you don't know whether array is sorted in ascending or descending order.
public class OrderAgnosticBinarySearch {
  public static void main(String[] args) {

    // int[] arr = { 1, 3, 5, 7, 12, 16, 18, 32, 64 };
    int[] arr = { 64, 32, 18, 16, 12, 7, 5, 3, 1 };
    int target = 18;
    System.out.println(orderAgnosticBS(arr, target));
  }

  static int orderAgnosticBS(int[] arr, int target) {
    int start = 0;
    int end = arr.length - 1;

    // find whether the array is sorted in ascending or descending.
    boolean isAsc = arr[start] < arr[end];

    while (start <= end) {
      // int mid = (start + end) / 2; //might be chances of overflow..
      int mid = start + (end - start) / 2;

      if (target == arr[mid])
        return mid;

      if (isAsc) {
        if (target > arr[mid]) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      } else {
        if (target > arr[mid]) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      }
    }
    return -1;
  }
}
