function calculate() {
  let amount = +document.getElementById("first_amount").value;
  let times = +document.getElementById("num_months").value;
  let rate = +document.getElementById("month_rate").value;

  let month_interest;
  let total_interest = 0;
  for (let i = 0; i < times; i++) {
    month_interest = (amount * rate) / 100;
    amount += month_interest;
    total_interest += month_interest;
  }

  document.getElementById(
    "interest"
  ).innerHTML = `Tổng số tiền lãi bằng ${total_interest} triệu VND`;
}
