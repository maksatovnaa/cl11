document.querySelector('.btn').addEventListener("click", function () {
  let first = document.querySelector('.placeholder').value;
  let second = document.querySelector('.plnumber').value;
  let third = document.querySelector('.cvc').value;
  let fourth = document.querySelector('.month').value;
  let fifth = document.querySelector('.year').value;

  let result = document.querySelector('.name');
  let name = document.querySelector('.card-number');
  let cvc = document.querySelector('.cvc1');
  let mon = document.querySelector('.month1');
  let year = document.querySelector('.year1');
  result.innerText = first;
  name.innerText = second;
  cvc.innerText = third;
  mon.innerText = fourth;
  year.innerText = fifth;
});