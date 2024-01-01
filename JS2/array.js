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