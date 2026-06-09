// kiểm tra số chẵn
function isEven(number) {
  return number % 2 === 0;
}
let input = prompt("Nhập vào một số nguyên bất kỳ:");
let number = parseInt(input);

//hiển thị kết quả (true hoặc false)
let result = isEven(number);
alert(result);