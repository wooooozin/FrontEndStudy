// truthy
// true, {}, [], 1, 2, 'false', -12. '3.14'...

// falsy
// false, '', null, undefiende, 0, -0, NaN

if ({}) {
  console.log(123);
}

// 함수
function sum(x, y) {
  console.log(x + y);
}

sum(1, 2);

const sum1 = function(x, y) {
  if ( x < 2) {
    return;
  }
  return x + y;
  console.log(x); // 실행되지 않음
}

// 화살표 함수
const doubleNum = function(x) {
  return x * 2;
}

const doubleArrow = (x) => {
  return x * 2;
}

const double2 = (x) => x * 2;
console.log(doubleArrow(7));
console.log(double2(7));

const ulEle = document.querySelector("ul")
const liEle = document.createElement("li");
liEle.textContent = "HIHI";
ulEle.appendChild(liEle);
liEle.addEventListener("click", function(event) {
  alert(event.target.textContent);
});

// 즉시 실행 함수(IIFE)

const a = 14;
function dddd() {
  console.log(a * 2);
}

dddd();

(function () {
  console.log(a * 3)
})();

// 호이스팅
// 함수 또는 변수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const b = 2;

hoistingFunc2();
// hoistingFunc()
const hoistingFunc = function() {
  console.log(b);
}

hoistingFunc()

function hoistingFunc2() {
  console.log("hoisting");
}

// 타이머 함수
let elapsedSeconds = 0;

// const timer = setInterval(() => {
//   elapsedSeconds += 1; 
//   liEle.textContent = `${elapsedSeconds}초 지남`;
// }, 1000);

// const h1El = document.querySelector("h1");
// h1El.addEventListener("click", () => {
//   clearInterval(timer);
//   liEle.textContent = "타이머 멈춤";
// });

// 콜백
// 함수의 매개밴수(인수)로 사용되는 함수

function timeOut(callBack) {
  setTimeout(() => {
    console.log("HIHIHI");
    callBack();
  },
  3000);
}

timeOut(() => {
  console.log("DONE");
});

