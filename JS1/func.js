function hello() {
  console.log("hello");
}

hello();

function retunrFunc() {
  let a = Number(prompt("숫자 입력"));
  let b = Number(prompt("숫자 입력"));
  return a + b;
}

let c = retunrFunc();
console.log(c);


// 기명 함수
function sayHello() {
  let name = prompt("이름입력");
  return "HELLO, " + name + "님 반갑습니다."
}

let insertName = sayHello();
console.log(insertName);

// 익명함수 - 데이터를 할당할 때 자주 
let world = function() {
  console.log('WORLD');
}

world();

// 객체 데이터 함수 사용
const loopy = {
  // 프로퍼티
  name: 'Loopy',
  age: 96,
  // 메서드
  getName: function() {
    return this.name;
  }
};

const name = loopy.getName();
console.log(name);
console.log(loopy.getName());

