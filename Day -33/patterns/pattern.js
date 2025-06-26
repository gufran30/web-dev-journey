function square(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

function rightAngleTriangle(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

function invertedRightAngleTriangle(n) {
  for (let i = n; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      process.stdout.write("* ");
      // process.stdout.write(j + 1 + " ");
    }
    console.log();
  }
  // for (let i = 0; i < n; i++) {
  //   for(let j = n-i; j > 0; j--) {
  //     process.stdout.write(  + " ");
  //   }
  //   console.log()
  // }
}

function triangle(n) {
  for (let i = 1; i <= n; i++) {
    // for space
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write("  ");
    }
    // for star
    for (let j = 0; j < 2 * i - 1; j++) {
      process.stdout.write("* ");
    }
    // for space
    for (let j = 1; j < n - (i + 1); j++) {
      process.stdout.write("  ");
    }
    console.log();
  }
}

function invertedTriangle(n) {
  for (let i = 1; i <= n; i++) {
    // for space
    for (let j = 1; j <= i - 1; j++) {
      process.stdout.write("  ");
    }
    // for star
    for (let j = 1; j <= 2 * n - (2 * i - 1); j++) {
      process.stdout.write("* ");
    }
    // for space
    for (let j = 1; j <= i - 1; j++) {
      process.stdout.write("  ");
    }
    console.log();
  }
}

function horizontalTriangle(n) {
  for (let i = 1; i <= n; i++) {
    if (i <= Math.ceil(n / 2)) {
      // for star
      for (let j = 1; j <= i; j++) {
        process.stdout.write("* ");
      }
      // for space
      for (let j = 1; j <= Math.floor(n / 2); j++) {
        process.stdout.write("  ");
      }
      console.log();
    } else {
      // for star
      for (let j = 1; j <= n + 1 - i; j++) {
        process.stdout.write("* ");
      }
      // for space
      for (let j = 1; j <= i - Math.ceil(n / 2); j++) {
        process.stdout.write("  ");
      }
      console.log();
    }
  }
}

function horizontalTriangleAnotherWay(n) {
  let row = 2 * n - 1;
  for (let i = 1; i <= row; i++) {
    if (i <= Math.ceil(row / 2)) {
      // star
      for (let j = 1; j <= i; j++) {
        process.stdout.write("* ");
      }
      // space
      for (let j = 1; j <= n - i; j++) {
        process.stdout.write("  ");
      }
    } else {
      // star
      for (let j = 1; j <= 2 * n - i; j++) {
        process.stdout.write("* ");
      }
      // space
      let k = 0;
      while (k !== i - n) {
        process.stdout.write("  ");
        k++;
      }
    }
    console.log();
  }
}

function zeroOneRightAngleTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let count = null;
    if (i % 2 === 0) count = 0;
    else count = 1;
    for (let j = 1; j <= i; j++) {
      process.stdout.write(count + " ");
      // count === 1 ? count = 0 : count = 1;
      count = 1 - count;
    }
    console.log();
  }
}

// triangle(5) + invertedTriangle(5)
// rightAngleTriangle(3) + invertedRightAngleTriangle(3)

// horizontalTriangle(7)
// zeroOneRightAngleTriangle(5)

function pattern12(n) {
  for (let i = 1; i <= n; i++) {
    let count = 1;
    // star
    for (let j = 1; j <= i; j++) {
      process.stdout.write(count++ + " ");
      // count++;
    }
    // space
    for (let j = 1; j <= 2 * (n - i); j++) {
      process.stdout.write("  ");
    }
    // star
    // let revCount = i;
    for (let j = i; j >= 1; j--) {
      process.stdout.write(j + " ");
    }
    console.log();
  }
}

function pattern13(n) {
  let count = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(count++ + " ");
    }
    console.log();
  }
}

// converting number to letter:
// let num = String.fromCharCode(65)
// console.log(num)
// converting letter to number
// let char = "a".charCodeAt(0)
// console.log(char)

function pattern14(n) {
  for (let i = 1; i <= n; i++) {
    let letter = 65;
    for (let j = 1; j <= i; j++) {
      let ans = String.fromCharCode(letter++);
      process.stdout.write(ans + " ");
    }
    console.log();
  }
}

function pattern15(n) {
  for (let i = n; i >= 1; i--) {
    let letter = 65;
    for (let j = 1; j <= i; j++) {
      let ans = String.fromCharCode(letter++);
      process.stdout.write(ans + " ");
    }
    console.log();
  }
}

function pattern16(n) {
  let letter = 65;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      let ans = String.fromCharCode(letter);
      process.stdout.write(ans + " ");
    }
    letter++;
    console.log();
  }
}

function pattern17(n) {
  for (let i = 1; i <= n; i++) {
    // space
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write("  ");
    }
    // star
    let letter = 65;
    for (let j = 1; j <= 2 * i - 1; j++) {
      if (j < i) {
        process.stdout.write(String.fromCharCode(letter++) + " ");
      } else {
        process.stdout.write(String.fromCharCode(letter--) + " ");
      }
    }
    // space
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write("  ");
    }
    console.log();
  }
}

function pattern18(n) {
  let letter = 65 + (n - 1);
  for (let i = 1; i <= n; i++) {
    let newLetter = letter;
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String.fromCharCode(newLetter++) + " ");
    }
    letter = letter - 1;
    console.log();
  }
}

function pattern19(n) {
  let row = 2 * n;
  for (let i = 1; i <= row; i++) {
    if (i <= n) {
      // star
      for (let j = 1; j <= n - (i - 1); j++) {
        process.stdout.write("* ");
      }
      // space
      for (let j = 1; j <= 2 * (i - 1); j++) {
        process.stdout.write("  ");
      }
      // star
      for (let j = 1; j <= n - (i - 1); j++) {
        process.stdout.write("* ");
      }
    } else {
      // star
      for (let j = 1; j <= i - n; j++) {
        process.stdout.write("* ");
      }
      // space
      for (let j = 1; j <= (row % i) * 2; j++) {
        process.stdout.write("  ");
      }
      // star
      for (let j = 1; j <= i - n; j++) {
        process.stdout.write("* ");
      }
    }
    console.log();
  }
}

function pattern20(n) {
  let spaces = 2 * n - 2;
  for (let i = 1; i <= 2 * n - 1; i++) {
    let stars = i;
    if (i > n) stars = 2 * n - i;
    // star
    for (let j = 1; j <= stars; j++) {
      process.stdout.write("* ");
    }
    // space
    for (let j = 1; j <= spaces; j++) {
      process.stdout.write("  ");
    }
    // star
    for (let j = 1; j <= stars; j++) {
      process.stdout.write("* ");
    }
    if (i < n) spaces -= 2;
    else spaces += 2;
    console.log();
  }
}

function pattern21(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 1 || j === 1 || i === n || j === n) {
        process.stdout.write("* ");
      } else {
        process.stdout.write("  ");
      }
    }
    console.log();
  }
}

pattern21(4);
