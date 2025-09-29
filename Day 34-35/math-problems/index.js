function CountDigit(n) {
  // let digits = 0;
  // if(n === 0) return 1;
  // while(n !== 0) {
  //   digits++;
  //   n = Math.floor(n/10)
  // }
  // return digits;
  return Math.floor(Math.log10(n) + 1);
}

function reverseNumber(n) {
  let rev = 0;
  while (n > 0) {
    let rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n / 10);
  }
  return rev;
}

function checkPalindrome(n) {
  let copy = n;
  let rev = 0;
  // do reverse
  while (n > 0) {
    let rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n / 10);
  }
  // if(rev === copy) return true;
  // else return false
  return rev === copy ? true : false;
}

function findGCD(n1, n2) {
  // let gcd = 1;
  // for(let i=2; i<=Math.min(n1, n2); i++) {
  //   if(n1 % i === 0 && n2 % i === 0) {
  //     gcd = i
  //   }
  // }
  // return gcd;

  for (let i = Math.min(n1, n2); i > 0; i--) {
    if (n1 % i === 0 && n2 % i === 0) {
      return i;
    }
  }

  //  you can also use Euclidean method here
  //   - Repeatedly subtract the smaller number from the larger number until one of them becomes 0.
  //   - Once one of them becomes 0, the other number is the GCD of the original numbers.
}

function Euclidean_GCD_method(a, b) {
  while (a > 0 && b > 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }
  if (a === 0) return b;
  return a;
}

function ArmstrongNum(n) {
  // let digit = CountDigit(n)
  let digit = Math.floor(Math.log10(n) + 1);
  let copy = n;
  let sum = 0;
  while (n > 0) {
    let rem = n % 10;
    sum = sum + rem ** digit;
    n = Math.floor(n / 10);
  }
  return copy === sum ? true : false;
}

function printAllDivisors(n) {
  // let divisorsArr = [];
  // for (let i = 1; i <= n; i++) {
  //   if (n % i === 0) divisorsArr.push(i);
  // }
  // return divisorsArr;

  // optimize
  let divisorsArr = [];
  let sqrtN = Math.sqrt(n);
  for (let i = 1; i <= sqrtN; i++) {
    if (n % i === 0) {
      divisorsArr.push(i);
      if (i !== n / i) {
        divisorsArr.push(n / i);
      }
    }
  }
  return divisorsArr;
}

function checkPrime(n) {
  if (n < 0) return "number should be positive.";
  if (n === 1) return "1 is composite number not prime.";

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
let ans = checkPrime(67);
console.log(ans);
