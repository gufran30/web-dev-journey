
public class Shadowing {
  static int x = 90;

  public static void main(String[] args) {
    
    System.out.println(x); // 90

    int x;   // high-level scope is shadowed by low-level scope
    // the class variable at line 3  is shadowed by this

    // System.out.println(x); // Error : scope will begin when value is initialised

    x = 45;

    System.out.println(x); // 40
    fun();
  }

  static void fun() {
    System.out.println(x); // 90
  }
}
