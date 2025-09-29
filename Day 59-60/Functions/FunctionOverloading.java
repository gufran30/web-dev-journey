// Function Overloading : Function with same name but different parameters

public class FunctionOverloading {
  public static void main(String[] args) {
    fun(10);
    fun("Gufran");

    sum(1, 2);
    sum(1, 2, 3);
  }

  static void fun(int a) {
    System.out.println(a);
  }

  static void fun(String a) {
    System.out.println(a);
  }

  static void sum(int a, int b) {
    System.out.println(a + b);
  }

  static void sum(int a, int b, int c) {
    System.out.println(a + b + c);
  }
}
