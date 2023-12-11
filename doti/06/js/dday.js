var now = new Date();
var firstDay = new Date(prompt("날짜를 입력하세요", "2019-01-01"));
var toNow = now.getTime();
var toFirst = firstDay.getTime();
var passedTIme = toNow - toFirst;

var passedDay = Math.round(passedTIme / (1000 * 60 * 60 * 24));

document.querySelector("#accent").innerText = passedDay + "일";

function calculateDate(days) {
  var future = toFirst + days * (1000 * 60 * 60 * 24);
  var hundredDay = new Date(future);
  var year = hundredDay.getFullYear();
  var month = hundredDay.getMonth() + 1;
  var day = hundredDay.getDate();
  document.querySelector("#date" + days).innerText = `${year}년 ${month}월 ${day}일`;
}

calculateDate(100);
calculateDate(200);
calculateDate(365);
calculateDate(500);

