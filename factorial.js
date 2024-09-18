let n;
do {
  n = +prompt("Nhap vao mot so nguyen duong:");
} while (n < 0);

let result = factorial(n);
document.write(`${n}! = ${result}`);

function factorial(n) {
  if (n == 0) return 1;
  let num = 1;
  for (i = 1; i <= n; i++) {
    num *= i;
  }
  return num;
}
