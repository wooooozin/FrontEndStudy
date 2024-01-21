const str = `
010-1234-1234
theest@gmail.com
http://www.examp.com?apikey=1234&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccddd
d`

//const regexp = new RegExp('the', 'gi');
const regexp = /the/gi
console.log(str.match(regexp))


// method - test
const regexp1 = /fox/gi
console.log(regexp1.test(str)); // true

// method - replace, 원본데이터 저장되지 않음
console.log(str.replace(regexp1, 'AAA'))
// ...
// The quick brown AAA jumps over the lazy dog
// ...

const regexp2 = /the/g
console.log(str.match(regexp2))

console.log(str.match(/\./gim))


// 패턴
console.log(
  str.match(/d$/gm) // ['d', 'd']
)

console.log(
  str.match(/^t/gim) // ['t', 'T']
)

console.log(
  str.match(/./g)
)

console.log(
  str.match(/h..p./gm) // ['https:']
)

console.log(
  str.match(/dog|fox/g)
)