// 데이터 타입 확인 - typeof
import getType from "./getType";
import random from "./getRandom";

console.log(getType(null)); // [object Null] 
console.log(getType(1234)); // [object Number]
console.log(getType(false)); // Boolean
console.log(getType({})); // Object
console.log(getType([])); // Array

// 산술 , 할당 연산자

console.log(1 + 2)
console.log(5 - 1);
console.log(3 * 4);
console.log(1 / 4);
console.log(1 % 4);
console.log(true + 1); // 2
console.log(false * 2); // 0

const a = 2;
console.log(a);

let b = 1;
b = b + 1;
console.log(b) // 2
b += 1;
console.log(b) // 3
b /= 3;
console.log(b); // 1


// 비교, 논리 연산자

const c = 1;
const d = 1;
console.log(c === d);
console.log(1 == '1'); // true
console.log(1 === '1'); // false

function isEqual(x, y) {
  return console.log(x === y);
}
function isNotEqual(x, y) {
  return console.log(x !== y);
}
isEqual(1, 1); // true
isEqual(1, '1'); // false
isEqual(1, true); // false
isNotEqual(1, 1); // false

console.log(1 < 1) // false
console.log(1 <= 1) // true
console.log()

console.log('&&: ', true && true && true)
console.log('&&: ', true && '루피' && true) // true
console.log('||: ', true || '루피' || false) // true
console.log('||: ', false || '루피' || false) // 루피
console.log('!: ', !true) // false

// 삼항연산자
console.log((1 < 2) ? true : false) // true
console.log((1 > 2) ? '참' : '거짓') // 거짓

// if - else

const num = random();
if (num === 1) {
  console.log('a is 1');
} else if (num === 10) {
  console.log('a is 10');
} else {
  console.log('a between 2 - 9');
}

// switch
switch (num) {
  case 0:
    console.log('num is 0');
    break;
  case 2:
    console.log('num is 2');
    break;
  case 4:
    console.log('num is 4');
    break;
  default:
    console.log('rest...');
    break;
}

// for 
const ulEl = document.querySelector('ul')
for (let i = 0; i < 10; i+=1) {
  const li = document.createElement('li');
  li.textContent = `list-${i + 1}`;
  if ((i+1) % 2 === 0 ) {
  li.addEventListener('click', function() {
    console.log(li.textContent);
  });
  }
  ulEl.appendChild(li);
}

// 변수 유효범위
// var, let, const

function scope() {
  if (true) {
    // console.log(a);
    const a = 123;
    // console.log(a);
  }
  // console.log(a);
}
scope();