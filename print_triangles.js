// Triangle 1
for (let i = 0; i < 5; i++) {
  document.write("&nbsp;");

  for (let j = 0; j <= i; j++) {
    document.write("*");
  }

  document.write("<br>");
}

document.write("<br>");
document.write("<br>");

// Triangle 2
for (let i = 0; i < 5; i++) {
  for (let j = 5 - i; j > 0; j--) {
    document.write("*");
  }

  document.write("<br>");
}

document.write("<br>");

// Triangle 3
for (let i = 0; i < 5; i++) {
  for (let j = 4 - i; j > 0; j--) {
    document.write("&nbsp;");
  }

  for (let j = 0; j <= i; j++) {
    document.write("*");
  }

  document.write("<br>");
}

document.write("<br>");

// Triangle 4
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < i; j++) {
    document.write("&nbsp;");
  }

  for (let j = 5 - i; j > 0; j--) {
    document.write("*");
  }

  document.write("<br>");
}

document.write("<br>");
