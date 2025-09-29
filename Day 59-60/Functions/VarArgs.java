// Variable Length Arguments : when we don't know how many arguments we are passing

import java.util.Arrays;

public class VarArgs {
  public static void main(String[] args) {
    fun(2, 3, 4, 5, 6, 7, 8, 9);

    fun2("Gufran", "Vishal", "Zeeshan", "Babu");

    multiple(2, 3, "Gufran", "Vishal", "Zeeshan", "Babu");
  }

  static void fun(int... v) {
    System.out.println(Arrays.toString(v));
  };

  static void fun2(String... v) {
    System.out.println(Arrays.toString(v));
  };

  static void multiple(int a, int b, String... v) {
    // varArg should come at the end in arguments/parameters.
    System.out.println(a);
    System.out.println(b);
    System.out.println(Arrays.toString(v));

  }
}
