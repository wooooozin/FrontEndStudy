
// JS DATA

// String: "", '', ``
// Number
// Boolean
// undefined
// null
// Array []
// Object {}

const paragraph = "The quick brown fox jumps over the lazy dog. if the dog barked, was it really lazy";
const searchTerm = "dog";
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(indexOfFirst);

const result = 'Hello world'.indexOf('world');
console.log(result);
const result1 = 'Hello world'.indexOf('loopy');
console.log(result1);

const str = '0123';
console.log(str.length);
console.log(str.substring(1, 2));
console.log(str);

const str1 = 'Hello world';
console.log(str1.indexOf('loopy') !== -1);
console.log(str1.slice(0, 3));
console.log(str1.slice(str1.indexOf('w')));
console.log(str1.replace('Hello', 'HELLO'))
console.log(str1);

const email = '    loopy@gmail.com';
console.log(email.match(/.+(?=@)/)[0].trim())
console.log(email);
console.log(email.trim());

