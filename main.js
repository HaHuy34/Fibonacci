//Bài 1. In ra các số Fibonacci nhỏ hơn hoặc bằng một số n cho trước
function fibonacci(n) {
  let prev = 0;
  let current = 1;

  while (current <= n) {
    console.log(current);
    let next = prev + current;
    prev = current;
    current = next;
  }
}

fibonacci(10);

//Bài 2. Tìm số Fibonacci thứ n trong dãy Fibonacci?
function fibonacci(n) {
  const sqrt5 = Math.sqrt(5);
  const phi = (1 + sqrt5) / 2;
  const psi = (1 - sqrt5) / 2;
  return Math.round((1 / sqrt5) * (Math.pow(phi, n) - Math.pow(psi, n)));
}

console.log(fibonacci(5));

//Bài 3. Tính tổng các số Fibonacci nhỏ hơn hoặc bằng một số n cho trước?
function fibonacciSum(n) {
  let sum = 0;
  let prev = 0;
  let current = 1;

  while (current <= n) {
    sum += current;
    let next = prev + current;
    prev = current;
    current = next;
  }

  return sum;
}

console.log(fibonacciSum(3));

//Bài 4. Kiểm tra xem một số có phải là số Fibonacci không?
function isFibonacci(n) {
  let check1 = 5 * n * n + 4;
  let check2 = 5 * n * n - 4;
  let sqrt1 = Math.sqrt(check1);
  let sqrt2 = Math.sqrt(check2);
  return sqrt1 % 1 === 0 || sqrt2 % 1 === 0;
}

console.log(isFibonacci(5));
console.log(isFibonacci(7));

//Bài 5. Tìm số Fibonacci lớn nhất nhỏ hơn hoặc bằng một số n cho trước?
function findLargestFibonacci(n) {
  let fib1 = 0;
  let fib2 = 1;
  let fib = 1;
  while (fib <= n) {
    let temp = fib;
    fib = fib1 + fib2;
    fib1 = temp;
    fib2 = fib;
  }
  return fib1;
}

console.log(findLargestFibonacci(10));

//Bài 6. Liệt kê n số Fibonacci đầu tiên?
function printFibonacci(n) {
  let fib1 = 0;
  let fib2 = 1;
  let fib = 0;
  console.log(fib1);
  console.log(fib2);
  for (let i = 3; i <= n; i++) {
    fib = fib1 + fib2;
    console.log(fib);
    fib1 = fib2;
    fib2 = fib;
  }
}

printFibonacci(10);

//Bài 7. Tính tổng các số Fibonacci từ số thứ m đến số thứ n trong dãy Fibonacci?
function sumFibonacci(m, n) {
  let fib1 = 0;
  let fib2 = 1;
  let fib = 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i >= m) {
      sum += fib2;
    }
    fib = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib;
  }
  return sum;
}

console.log(sumFibonacci(3, 7));

//Bài 8: Tìm số Fibonacci gần với một số n cho trước nhất?
function findClosestFibonacci(n) {
  let fib1 = 0;
  let fib2 = 1;
  let fib = 1;
  while (fib < n) {
    fib = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib;
  }
  if (Math.abs(fib1 - n) < Math.abs(fib2 - n)) {
    return fib1;
  } else {
    return fib2;
  }
}

console.log(findClosestFibonacci(4));

//Bài 9. Tìm số được hình thành bằng cách ghép các số Fibonacci liên tiếp trong dãy Fibonacci?
function findNumberFormedByFibonacci(n) {
  let fib1 = 0;
  let fib2 = 1;
  let fib = 1;
  for (let i = 2; i <= n; i++) {
    fib = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib;
  }
  return fib2 - 1;
}

console.log(findNumberFormedByFibonacci(10)); 
