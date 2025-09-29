// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/description/


public class EvenDigits {
  public static void main(String[] args) {
    
    int[] nums = {12,345,2,6,7896};

    System.out.println(findNumbers(nums));
  }

  static int findNumbers(int[] arr) {

    int evenCount = 0;
    for(int i=0; i<arr.length; i++) {
      int element = arr[i];
      int count = (int) (Math.log10(element) + 1);
      if(count % 2 == 0) evenCount++;
    }

    return evenCount;
  }
}
