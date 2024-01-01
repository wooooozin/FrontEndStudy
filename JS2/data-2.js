console.log('connent')

const pi = 3.141592;
console.log(pi);

const str = pi.toFixed(2);
console.log(str); // 3.14
console.log(typeof str); // string

const interger = parseInt(str);
const float = parseFloat(str);
console.log(interger); // 3
console.log(float); // 3.14
console.log(typeof interger, typeof float); // number number

// Math
console.log(Math.abs(1 - 4)); //3
console.log(Math.min(2, 7)); // 2
console.log(Math.max(1, 2, 10)); // 10
console.log(Math.ceil(1.43)); // 2
console.log(Math.floor(1.45)); // 1
console.log(Math.round(3.14)); // 3
console.log(Math.floor(Math.random() * 2 + 1)) // 1 or 2
