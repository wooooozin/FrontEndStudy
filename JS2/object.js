// .assign()
const t = {
  a: 1, b: 2
}

const s = {
  b: 4, c: 5
}

const returnTarget = Object.assign(t, s);
console.log(t); // {a: 1, b: 4, c; 5}
console.log(returnTarget) // // {a: 1, b: 4, c; 5}

const userAge = {
  name: 'loopy',
  age: 20
}

const userEmail = {
  name: 'loopy',
  email: 'loopy@loopy.com'
}

const target = Object.assign({}, userAge, userEmail)
console.log(target) // {name: 'loopy', age: 20, email: 'loopy@loopy.com'}
console.log(userAge) // {name: 'loopy', age: 20}
console.log(target === userAge) // false

const a = { k: 123 }
const b = { k: 123 }
console.log(a === b) // false

// .keys()

const loopy = {
  name: 'loopy',
  age: 20,
  email: 'loopy@loopy.com'
}

const keys = Object.keys(loopy)
console.log(keys) // ['name', 'age', 'email']

console.log(loopy['name']) // loopy

const values = keys.map(key => loopy[key])
console.log(values) // ['loopy', 20, 'loopy@loopy.com']