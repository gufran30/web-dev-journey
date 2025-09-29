// printing 0 to 3 using recursion
function print(n) {
  if (n === 4) return;
  console.log(n);
  print(n + 1);
}

// printing name N times without count variable.
function printName(i, n) {
  if (i > n) return;
  console.log("Gufran");
  printName(i + 1, n);
}

// printing 1 to N
function printOneToN(i, n) {
  if (i > n) return;
  console.log(i);
  printOneToN(i + 1, n);
}

// sum of N numbers
//  1. Parameterized way
function sumOfN_parameterized(n, sum) {
  if (n < 1) {
    console.log(sum);
    return;
  }
  sumOfN(n - 1, sum + n);
}
// 2. Functional Way
function sumOfN_functional(n) {
  if (n === 1) return 1;
  return n + sumOfN_functional(n - 1);
}

// Factorial
function Factorial(n) {
  if (n === 1) return 1;
  return n * Factorial(n - 1);
}

// Reverse Array
function reverseArr(arr, start, end) {
  if (start >= end) {
    return arr;
  }
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;

  return reverseArr(arr, start + 1, end - 1);
}

function isPalindromeStr(str, i, j) {
  str = str.toLowerCase();
  str = str.replace(/[a-zA-Z0-9]/g, '');
  if (i >= Math.floor(str.length / 2)) return true;
  if (str.charAt(i) === str.charAt(j)) {
    return isPalindromeStr(str, i + 1, j - 1);
  }
  return false;
}

function FibonacciNum(n) {
  // 0 based indexing
  let a = 0, b = 1, fb = 0;
    if(n === 0 || n === 1 ) return n
    for(let i=2; i<=n; i++) {
        fb = a + b;
        a = b;
        b = fb
    }
    return fb;
}

console.log(FibonacciNum(7))
