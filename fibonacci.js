let times = +prompt("Nhập vào số số fibonacci muốn in ra:");
let loop_times = Math.floor(times / 2);

let num1 = 1;
let num2 = 1;

for (let i = 0; i < loop_times; i++) {
  document.write(num1 + "<br>");
  document.write(num2 + "<br>");
  num1 = num1 + num2;
  num2 = num1 + num2;
}
// If times is an odd number, print out one more fibonacci number
if (times % 2) {
  document.write(num1);
}
