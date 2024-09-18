function white(num) {
  let s = "";
  for (let i = 0; i < num; i++) {
    s += "&nbsp;";
  }
  document.write(s);
}

function black(num) {
  let s = "";
  for (let i = 0; i < num; i++) {
    s += "*";
  }
  document.write(s);
}

function red(num) {
  let s = "";
  s += "<span style='color:red;'>";
  for (let i = 0; i < num; i++) {
    s += "-";
  }
  s += "</span>";
  document.write(s);
}

function enter() {
  document.write("<br>");
}

white(4);
black(3);
white(4);
black(3);
white(4);
enter();

white(2);
black(2);
red(3);
black(1);
white(2);
black(1);
red(3);
black(2);
white(2);
enter();

white(1);
black(1);
red(6);
black(2);
red(6);
black(1);
white(1);
enter();
white(1);
black(1);
red(14);
black(1);
white(1);
enter();

for (let i = 0; i < 4; i++) {
  black(1);
  red(16);
  black(1);
  enter();
}

white(1);
black(1);
red(14);
black(1);
white(1);
enter();

for (let i = 0; i < 8; i++) {
  white(i + 1);
  black(1);
  red(14 - 2 * i);
  black(1);
  white(i + 1);
  enter();
}
