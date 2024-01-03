// lodash
import _ from 'lodash'

const usersA = [
  { userId: '1', name: 'loopy'},
  { userId: '2', name: 'neo'}
]

const usersB = [
  { userId: '1', name: 'loopy'},
  { userId: '3', name: 'woozi'}
]

// uniqBy, unionBy
const usersC = usersA.concat(usersB)
console.log('concat', usersC)
console.log('uniqBy', _.uniqBy(usersC, 'userId')) // 하나의 배열에서 'userId'기준으로 고유한 값만 반환 

const usersD = _.unionBy(usersA, usersB, 'userId'); // 여러개의 배열에서 'userId'기준으로 고유한 값만 반환
console.log(usersD)

// find, findIndex, remove
const users = [
  { userId: '1', name: 'HEROPY' },
  { userId: '2', name: 'Neo' },
  { userId: '3', name: 'Amy' },
  { userId: '4', name: 'Evan' },
  { userId: '5', name: 'Lewis' }
];

const foundUser = _.find(users, { name: 'Amy' });
const foundUserIndex = _.findIndex(users, { name: 'Amy' });

console.log(foundUser); // 찾은 사용자 객체 출력
console.log(foundUserIndex); // 찾은 사용자의 인덱스 출력 2

_.remove(users, { name: 'HEROPY' }); // 사용자 목록에서 'HEROPY'를 제거
console.log(users); // 변경된 사용자 목록 출력
