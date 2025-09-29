public class StringExample {
  public static void main(String[] args) {
    // System.out.println(greet());
    System.out.println(personalisedGreet("Gufran"));
  }

  static String greet() {
    return "Hello, Good Morning";
  }

  static String personalisedGreet(String name) {
    return "Hello, " + name;
  }
}
