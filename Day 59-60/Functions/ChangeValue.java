import java.util.Arrays;

public class ChangeValue {
  public static void main(String[] args) {

    // create an array
    int[] arr = { 2, 5, 33, 54, 32 };
    change(arr);
    System.out.println(Arrays.toString(arr));
  }

  // Pass by value
  // In Java, we don't have pointers ( we don't get the address of anything)

  static void change(int[] nums) {
    nums[0] = 99; // if you make a change to the object via this ref variable, same object will be
                  // changed.
  }
}
