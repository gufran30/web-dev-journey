import java.util.ArrayList;

public class ArrayListExample {
  public static void main(String[] args) {
    // syntax
    ArrayList<Integer> list = new ArrayList<>(10);
    // type should not be primitive, but wrapper class
    list.add(21);
    list.add(34);
    list.add(54);
    list.add(53);
    list.add(87);
    list.add(73);
    list.add(734);
    list.add(54);
    list.add(62);
    list.add(6879);
    list.add(615);
    list.add(6165);
    list.add(846);
    System.out.println(list);
    // here we can see initialCapacity is 10 but we put more than 10 element. HOW ??
    // when we exceed initialCapacity, create a new list, will be double the size of initialCapacity & remove the old list
    list.set(0, 99);
    System.out.println(list);
    list.remove(2);
    System.out.println(list);
    System.out.println(list.get(9));

  }
}
