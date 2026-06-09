
function sum(a, b) {
  return a + b;
}
let num1 = Number(prompt("Nhập số thứ nhất:"));
let num2 = Number(prompt("Nhập số thứ hai:"));
// Tính 
let result = sum(num1, num2);
// Hiển thị kết quả bằng alert
alert(`Tổng của ${num1} + ${num2} = ${result}`);