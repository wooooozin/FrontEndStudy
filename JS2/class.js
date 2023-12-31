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

class HelpButton {
  constructor(name, action, pageUrl) {
      this.name = name;
      this.action = action;
      this.pageUrl = pageUrl;
  }

  click() {
      console.log(`버튼 '${this.name}'가 클릭되었습니다.`);
      this.action();
  }

  navigate() {
      console.log(`페이지 '${this.pageUrl}'로 이동합니다.`);
  }
}
function showHelp() {
  console.log("도움말을 표시합니다.");
}
const helpButton = new HelpButton("도움말", showHelp, "https://example.com/help");
const pTag = document.createElement('p');
document.body.appendChild(pTag);

const button = document.createElement('button');
button.textContent = helpButton.name;
button.addEventListener('click', () => {
    helpButton.click();
    helpButton.navigate();
});

pTag.appendChild(button);

// ES6 Classes

const loopy4 = {
  name: 'Loopy',
  noraml() {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}

loopy4.noraml();
loopy4.arrow();