const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(numbers[1]) // 2
console.log(fruits[1]) // Banana

console.log(numbers.length) // 4
console.log(numbers.find(e => e > 1)) // 2 조건을 만족하는 첫번째 요소를 반환
console.log(numbers.concat(fruits)) // (7) [1, 2, 3, 4, 'Apple', 'Banana', 'Cherry']
console.log(numbers) // (4) [1, 2, 3, 4]

fruits.forEach(function(e, idx, arr) {
  console.log(e, idx, arr); 
  // Apple 0 ['Apple', 'Banana', 'Cherry']
  // Banana 1 ['Apple', 'Banana', 'Cherry']
  // Cherry 2 ['Apple', 'Banana', 'Cherry']
})

const b = fruits.map(function (item, index) {
  return `${item} - ${index}`
})

const c = fruits.map(function (item, index) {
  return {
    id: index,
    name: item
  }
})
console.log(b); // ['Apple - 0', 'Banana - 1', 'Cherry - 2']
console.log(c); // {id: 0, name: 'Apple'} {id: 1, name: 'Banana'} {id: 2, name: 'Cherry'}

// .map()
const m = numbers.map(number => number < 3)
console.log(m) // [true, true, false, false]

// .filter()
const f = numbers.filter(number => number < 3)
console.log(f) // [1, 2]

// .find() .findIndex()
const ff = fruits.find(fruit => /^B/.test(fruit))
console.log(ff); // Banana - 만족하는 첫번째 요소 반환

const fff = fruits.findIndex(fruit => /^B/.test(fruit))
console.log(fff); // 1



// includes()
const i = numbers.includes(3);
console.log(i); // true

// push, unshift - 원본이 수정됨, 뒤 앞에 요소 추가
numbers.push(5)
console.log(numbers);

numbers.unshift(0) // [1, 2, 3, 4, 5]
console.log(numbers) // [0, 1, 2, 3, 4, 5]

// reverse - 원본이 수정됨
numbers.reverse();
console.log(numbers); // [5, 4, 3, 2, 1, 0]


// splice() - 원본 수정됨
numbers.splice(2, 2) // index 2부터 3개를 지워라
console.log(numbers) // [5, 4, 1, 0]
numbers.splice(2, 1, 999) // index 2부터 1개를 지우고 999를 그 자리에 넣어라
console.log(numbers) // [5, 4, 999, 0]

// 

// pop, shift - 원본 수정됨
numbers.pop() // 맨 뒤의 요소 삭제 
console.log(numbers) // [5, 4, 999]
numbers.shift() // 맨 앞 요소 삭제
console.log(numbers)// [4, 999]