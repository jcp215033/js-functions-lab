// Question 1
function hello(name) {
  // Write your code here
  console.log(`Hello, ${name}!`)
}

hello("Carmen"); // "Hello, Carmen!"
hello("Devonte"); // "Hello, Devonte!"
hello("Reuben Ogbonna"); // "Hello, Reuben Ogbonna!"

// Question 2
function findProduct(num1, num2) {
  // Write your code here
  console.log(num1 * num2);
}
findProduct(5, 7); // 35
findProduct(15, 10); // 150
findProduct(25.75, 42); // 1081.5

// Question 3
function getSquare(side) {
  //Write your code here
  console.log(side * side);
}

getSquare(5); // 25
getSquare(4); // 16
getSquare(3); // 9
// Question 4
function makeOpposite(num) {
  //Write your code here

  console.log(num * -1);
}
makeOpposite(9); // -9
makeOpposite(-3); // 3
makeOpposite(5.78); // -5.78

// Question 5
function logEvenNumbers() {
  // Write your code here
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  return `"Why is 6 afraid of 7?"`;
}
console.log(logEvenNumbers());

// Question 6
function sumFoursAndSevens(num) {
  // Write your code here
  let sum = 0;
  for (let i = 0; i <= num; i++)
    if ((i % 4 === 0 && i % 7 === 0) || i % 4 === 0 || i % 7 === 0) {
      sum += i;
    }
  console.log(sum);
}
sumFoursAndSevens(17);
sumFoursAndSevens(21);

// Question 7
function exsAndOhs(length) {
  // Write your code here
  let emptyStr = ``;
  for (let i = 1; i <= length; i++) {
    if (i % 2 !== 0) {
      emptyStr += 'X';
    }
    else {
      emptyStr += 'O';
    }
  }
  console.log(emptyStr);
}

exsAndOhs(6); // "XOXOXO"
exsAndOhs(9); // "XOXOXOXOX"
exsAndOhs(4); // "XOXO"
exsAndOhs(7);

// Do NOT touch or write anything below this line
module.exports = {
  hello,
  getSquare,
  makeOpposite,
  logEvenNumbers,
  findProduct,
  sumFoursAndSevens,
  exsAndOhs,
};
