// https://leetcode.com/problems/find-in-mountain-array/

public class FIndInMountainArray1095 {
  public static void main(String[] args) {

    int[] mountainArr = { 1, 2, 3, 4, 5, 3, 1 };
    int target = 5;

    System.out.println(search(mountainArr, target));

  }

  static int search(int[] arr, int target) {
    int peak = peakIndexInMountainArray(arr);
    int firstTry = orderAgnosticBS(arr, target, 0, peak);
    if (firstTry != -1) {
      return firstTry;
    }
    // try in second half
    return orderAgnosticBS(arr, target, peak + 1, arr.length - 1);
  }

  static int peakIndexInMountainArray(int[] arr) {
    int start = 0, end = arr.length - 1;

    while (start < end) {
      int mid = start + (end - start) / 2;
      if (arr[mid] > arr[mid + 1]) {
        // you are in descending part of array
        // this may be the ans, but look at left
        // this is why end != mid - 1
        end = mid;
      } else {
        // you are in ascending part of array
        start = mid + 1; // because we know that mid+1 element > mid element
      }
    }
    // in the end, start == end and pointing to the largest number.
    // hence, when they are pointing ro just one element, that is the max one
    return start; // or return end as both are equal
  }

  // orderAgnostic
  static int orderAgnosticBS(int[] arr, int target, int start, int end) {

    // find whether the array is sorted in ascending or descending.
    boolean isAsc = arr[start] < arr[end];

    while (start <= end) {
      int mid = start + (end - start) / 2;

      if (arr[mid] == target)
        return mid;

      if (isAsc) {
        if (arr[mid] > target) {
          end = mid;
        } else {
          start = mid + 1;
        }
      } else {
        if (arr[mid] > target) {
          start = mid + 1;
        } else {
          end = mid;
        }
      }
    }
    return -1;
  }
  
}
