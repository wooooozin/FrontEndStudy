// String(문자데이터)
// 따옴표
let myName = "LOOPY";
let email = "loopy@gmail.com";
let hello = `Hello ${myName}!`;

console.log(myName);
console.log(email);
console.log(hello);

// Number(숫자)
// 정수 및 부동 소수점
let number = 123;
let opacity = 1.52;

console.log(number);
console.log(opacity);

// Boolean(불린 데이터)
let checked = true;
let isShow = false;

console.log(checked);
console.log(isShow);

// Undefined 
// 값이 할당되지 않은 상태
let undef;
let obj = { abc:123 }

console.log(undef); // undefined
console.log(obj.abc); // 123
console.log(obj.xyz); // undefined

// Null
// 어떤 값이 의도적으로 비어 있음을 의미
let empty = null;
console.log(empty); // null

// Object
// 여러 데이터를 Key:Value 형태로 저장
let user = {
  name: 'loopy',
  age: 25,
  isValid: true
};

console.log(user.name); // loopy
user.weigth = 60;
console.log(user);

// Array
// 여러 데이터를 순차적으로 저장
let f = ['Apple', 'Banana', 'Cherry'];
console.log(f);
console.log(f[0]); // Apple