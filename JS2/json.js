// JSON

const loopy = {
  "name" : "loopy",
  "age" : 20,
  "emails" : [
    "hi@hi.com",
    "lo@lo.com"
  ]
}

console.log(loopy.emails[1])

const str = JSON.stringify(loopy)
console.log(str)

const obj = JSON.parse(str)
console.log(obj)
