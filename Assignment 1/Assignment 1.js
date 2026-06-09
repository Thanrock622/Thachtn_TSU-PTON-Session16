function processConfirm(question) {
  let answer = confirm(question);
  let result = '';
  if (answer) {
    result += "Excellent. We'll play a nice game of chess.";
  } else {
    result += 'Maybe later then.';
  }
  return result;
}

// Gọi hàm và hiển thị kết quả ra màn hình
let message = processConfirm('Bạn có muốn chơi cờ không?');
document.write(message);