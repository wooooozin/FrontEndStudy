const str = `
010-1234-1234
theest@gmail.com
http://www.examp.com?apikey=1234&s=frozen
The quick brown jumps over the lazy dog
abbcccddd
`

//const regexp = new RegExp('the', 'gi');
const regexp = /the/gi
console.log(str.match(regexp))




