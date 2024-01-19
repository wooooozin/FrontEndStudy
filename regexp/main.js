const str = `
010-1234-1234
theest@gmail.com
http://www.examp.com?apikey=1234&s=frozen
The quick brown fox jumps over the lazy dog
abbcccddd
`

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




