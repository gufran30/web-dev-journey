public class PassByValue {
  public static void main(String[] args) {

    String name = "Gufran";
    changeName(name); // copy "Gufran" (object / value)
    System.out.println(name); // print Gufran
  }

  static void changeName(String naam) {
    naam = "Vishal"; // not modifying but creating a new object/value
  }
}
