// https://leetcode.com/problems/richest-customer-wealth/description/

public class MaxWealth {
  public static void main(String[] args) {

    // int[][] accounts = { { 1, 2, 3 }, { 3, 2, 1 } };
    int[][] accounts = { { 1, 5 }, { 7, 3 }, { 3, 5 } };
    System.out.println(maximumWealth(accounts));
  }

  static int maximumWealth(int[][] arr) {

    int richSum = 0;

    for (int account = 0; account < arr.length; account++) {
      int individualSum = 0;
      for (int user = 0; user < arr[account].length; user++) {
        individualSum += arr[account][user];
      }
      if (individualSum > richSum)
        richSum = individualSum;
    }

    return richSum;
  }
}
