public class TypeCasting {
  public static void main(String[] args) {

    // float num1 = 65.32f;
    // int num = (int) num1;
    // System.out.println(num);

    // byte b = 127; // range of byte is -128 to 127
    // System.out.println(b);

    // byte a = 100;
    // byte b = 5;
    // byte c = 2;
    // int ans = (a*b)/c; // type promotion byte to int in expresison
    // System.out.println(ans);

    byte b = 42;
    char c = 'a';
    short s = 1024;
    int i = 5000;
    float f = 5.65f;
    double d = 0.1234;
    double result = (f * b) + (i / c) - (d * s);
    // float + int - double = double
    System.out.println((f * b) + "  " + (i / c) + "  " + (d * s));
    System.out.println(result);
  }
}
