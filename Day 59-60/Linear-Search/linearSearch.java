public class linearSearch {
  public static void main(String[] args) {
    int[] arr = {1,23,5,23,45,21,34};
    int target = 45;
    // System.out.println(findElement(arr, target));

    // String str = "Gufran";
    // char target = 'r';
    // System.out.println(searchInString(str, target));

    System.out.println(findElementInRange(arr, target, 2, 5));

  }

  static int findElement(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
      if (arr[i] == target) {
        return i;
      }
    }
    return -1;
  }

  static boolean searchInString(String str, char target) {
    if (str.length() == 0)
      return false;

    for (int i = 0; i < str.length(); i++) {
      if (target == str.charAt(i))
        return true;
    }

    return false;
  }

  static int findElementInRange(int[] arr, int target, int start, int end) {
    for (int i = start; i <= end; i++) {
      if (arr[i] == target) {
        return i;
      }
    }
    return -1;
  }

}
