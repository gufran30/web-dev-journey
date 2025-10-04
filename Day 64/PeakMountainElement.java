// https://leetcode.com/problems/peak-index-in-a-mountain-array/description/

public class PeakMountainElement {
  public static void main(String[] args) {
    int[] arr = { 0, 2, 1, 0 };
    System.out.println(peakIndexInMountainArray(arr));
  }

  static int peakIndexInMountainArray(int[] arr) {
    int start = 0, end = arr.length - 1;
    while (start < end) {
      int mid = start + (end - start) / 2;
      if (arr[mid] > arr[mid + 1]) {
        // array is in descending , search in left
        end = mid;
      } else {
        // array is in ascending, search in right
        start = mid + 1;
      }
    }
    return start;
  }
}
