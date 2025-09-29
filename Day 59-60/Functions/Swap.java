public class Swap {

  public static void main(String[] args) {

    int a = 20, b = 30;

    swap(a, b);
    // will a & b will be swap here ?? => NO
    System.out.println(a + " " + b);

  }

  static void swap(int a , int b) {
    int temp = a;
    a = b;
    b = temp;

    // this change will only be valid in this function scope only.
  }
}