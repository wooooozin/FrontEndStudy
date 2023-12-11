var now = new Date();
var firstDate = new Date("2023-01-01");
var toNow = now.getTime();
var toFirst = firstDate.getTime();

var passedDay = Math.round((toNow - toFirst) / (24 * 60 * 60 * 1000));

document.querySelector("#accent").innerText = `${passedDay}일`;

function calcDate(days) {
  var future = new Date(toFirst + (days * 24 * 60 * 60 * 1000));
  var year = future.getFullYear();
  var month = future.getMonth() + 1;
  var day = future.getDate();

  document.querySelector("#date" + days).innerText = 
  `${year}년 ${month}월 ${day}일`;
}

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);