import _ from 'lodash'

// .assign()
const t = {
  a: 1, b: 2
}

const s = {
  b: 4, c: 5
}

const returnTarget = Object.assign(t, s);
console.log(t); // {a: 1, b: 4, c; 5}
console.log(returnTarget) // // {a: 1, b: 4, c; 5}

const userAge = {
  name: 'loopy',
  age: 20
}

const userEmail = {
  name: 'loopy',
  email: 'loopy@loopy.com'
}

const target = Object.assign({}, userAge, userEmail)
console.log(target) // {name: 'loopy', age: 20, email: 'loopy@loopy.com'}
console.log(userAge) // {name: 'loopy', age: 20}
console.log(target === userAge) // false

const a = { k: 123 }
const b = { k: 123 }
console.log(a === b) // false

// .keys()

const loopy = {
  name: 'loopy',
  age: 20,
  email: 'loopy@loopy.com'
}

const keys = Object.keys(loopy)
console.log(keys) // ['name', 'age', 'email']

console.log(loopy['name']) // loopy

const values = keys.map(key => loopy[key])
console.log(values) // ['loopy', 20, 'loopy@loopy.com']


// 구조 분해 할당

const user = {
  name: 'loopy',
  age: 20,
  email: 'loopy@loopy.com'
}

const { name: loopyy, age, email, address = 'korea' } = user;
console.log(loopyy, age, email, address); // loopy 20 loopy@loopy.com korea

const fruitss = ['Apple', 'Banana', 'Cherry'];
const [aa, bb, cc, dd = 'Orange'] = fruitss;
console.log(aa, bb, cc, dd); // Apple Banana Cherry Orange
console.log(fruitss); // ['Apple', 'Banana', 'Cherry']

// 전계 연산자(Spread)
console.log(...fruitss); // Apple Banana Cherry

function toObject(a, b, c) {
  return {
    a: a,
    b: b,
    c: c
  }
}

console.log(toObject(...fruitss)); // {a: 'Apple', b: 'Banana', c: 'Cherry'}
console.log(toObject(fruitss[0], fruitss[1], fruitss[2])); // {a: 'Apple', b: 'Banana', c: 'Cherry'}

const fruitsss = ['Apple', 'Banana', 'Cherry', 'Orange'];
function toObjectSpread(a, b, ...c) {
  return {
    a: a,
    b: b,
    c: c
  }
}
// const toObjectSpread = (a, b, ...c) => ({a, b, c})
console.log(toObjectSpread(...fruitsss));
/*
{a: 'Apple', b: 'Banana', c: Array(2)}
*/

// 데이터 불변성
// 원시데이터 : String, Number, Boolean, undefined, null
// 참조형 데이터 : Object, Array, Function

let one = 1;
let four = 4;
console.log(one, four, one === four); // 1 4 false

four = one
console.log(one, four, one === four); // 1 1 true

one = 7
console.log(one, four, one === four); // 7 1 false

let newOne = 1
console.log(four, newOne, four === newOne); // 1 1 true

let oA = {k : 1};
let oB = {k : 1};
console.log(oA, oB, oA === oB); // {k: 1} {k: 1} false
oA.k = 7;
oB = oA;
console.log(oA, oB, oA === oB); // {k: 7} {k: 7} true
oA.k = 2;
console.log(oA, oB, oA === oB); //  {k: 2} {k: 2} true

let oC = oB;
console.log(oA, oB, oC, oA === oC); // {k: 2} {k: 2} {k: 2} true
oA.k = 9;
console.log(oA, oB, oC, oA === oC); // {k: 9} {k: 9} {k: 9} true

// 얕은 복사, 깊은 복사
const copy = {
  name: 'loopy',
  age: 20,
  emails: ['loopy@loopy.com']
}

const copyUser = copy;
console.log(copy === copyUser);// true

copy.age = 22;
console.log('copyUser', copyUser.age); // 22

console.log('-------------')
const deepCopyUser = Object.assign({}, copy);
console.log(copy === deepCopyUser); // false
copy.age = 30
console.log(copy.age, copyUser.age, deepCopyUser.age); // 30 30 22

const spreadCopyUser = {...copy};
console.log(copy === spreadCopyUser); // false

copy.emails.push('new@email.com');
console.log(copy.emails)
console.log(copyUser.emails)

// lodash

const lodashCopyUser = _.cloneDeep(copy);
console.log(lodashCopyUser);