/* Find GCD using recursion 

let a = 16,
  b = 24;

function EuclidRec(a, b) {
  if (a === b) return a;
  if (a > b) a = a - b;
  else b = b - a;

  return EuclidRec(a, b);
}

console.log(EuclidRec(a, b))


*/

/* SUm of digits

function sumOfDigits(n) {
    // Write your logic here
    if(n < 10) return n;
    return (n%10) + sumOfDigits(Math.floor(n/10))
}

*/

/* Power Function


*/

function myPow(n, p) {
  // Write your code here
  if (p === 1) return n;
  return (n * myPow(n, p - 1)).toFixed(5);
}

let n = -2.00000, p = 5;
console.log(myPow(n, p));