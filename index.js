function pow(num, degree) {
  
  if (typeof num !== 'number' || typeof degree !== 'number' || num < 0 || !Number.isInteger(num) || !Number.isInteger(degree) || degree < 0) {
    console.log('Error! Incorrect input value!');
    return;
  }

  if (degree === 0) {
    return 1;
  }

  return num * pow(num, degree - 1);
}

console.log(pow(2, 1));  // 2
console.log(pow(2, 3));  // 8
console.log(pow(5, 0));  // 1
console.log(pow(10, 2)); // 100
console.log(pow(0, 2)); // 0
pow('abc', 2); // 'Error! Incorrect input value!'
pow(3.14, 2.5); // 'Error! Incorrect input value!'
pow(-2, 3); // 'Error! Incorrect input value!'
pow(8, -3); // 'Error! Incorrect input value!'