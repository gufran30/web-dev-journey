
public class BinarySearch {
  public static void main(String[] args) {

    int[] arr = { 1, 3, 5, 7, 12, 16, 18, 32, 64 };
    int target = 18;
    System.out.println(binarySearch(arr, target));
  }

  static int binarySearch(int[] arr, int target) {
    int start = 0;
    int end = arr.length - 1;

    while (start <= end) {
      // int mid = (start + end) / 2; //might be chances of overflow..
      int mid = start + (end - start) / 2;

      if (target > arr[mid])
        start = mid + 1;
      else if (target < arr[mid])
        end = mid - 1;
      else
        // ans found
        return mid;
    }
    return -1;
  }
}
