public class Scope {
  public static void main(String[] args) {
    int a = 10;
    int b = 20;
    String name = "Gufran";
    
    // block scope
    {
      // int a = 24; // already initialised outside the block in the same function

      a = 43; // " reassigning ", can modified in block and can be use outside the block 

      // int c = 99; // value initialised in this block, will remain in block

      name = "Khan";
    }
    // System.out.println(c); // cannot use outside the block
    System.out.println(name); // print Khan

  }

  static void random() {
    // System.out.println(a); // "functional scope" prevent from accessing
  }
}
