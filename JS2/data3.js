import checkType from "./getType"
import _ from 'lodash'
import { random, user } from './getRandom'

console.log(_.camelCase('the hello world')) // theHelloWorld
console.log(checkType([1, 2, 3])) // Array
console.log(random())
console.log(user); // {name: 'loopy', age: 20}