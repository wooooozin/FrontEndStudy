// 클래스 - 생성자
const loopy = {
  firstName: 'Loopy',
  lastName: 'Zanmang',
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(loopy.getFullName());

function user(first, last) {
  this.firstName = first;
  this.lastName = last;
}

user.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}

const loopy2 = new user("loopy", "zanmang");
const amy = new user("Amy", "Clarke");
const neo = new user('Neo', 'Smith');
console.log(loopy2)
console.log(loopy2.getFullName())
console.log(amy.getFullName())
console.log(neo.getFullName())

class UserClass {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const loopy3 = new  UserClass('loopyy', 'zzzz');
console.log(loopy3.getFullName());

// this
// 일반 함수는 호출 위치에서 따라 this를 정의
// 화살표 함수는 자신이 선언된 함수 범위에서 this를 정의

const p = {
  name: 'p',
  noraml: function() {
    console.log(this.name);
  },
  arrow: () => {
    const name = 'arrow';
    console.log(this.name); // undefined
    console.log(name); // name
  }
}

p.noraml(); // p
p.arrow(); // undefined

class User2 {
  constructor(name) {
    this.name = name;
  }
  noraml = function() {
    console.log(this.name);
  }
  arrow = () => {
    console.log(this.name);
  }
}

const u2 = new User2('HIHI');
u2.noraml();
u2.arrow();

const timer = {
  name: 'llloopy',
  timeout: function() {
    setTimeout(() => {
      console.log(this.name);
    }, 3000)}
}

timer.timeout(); // llloppy



