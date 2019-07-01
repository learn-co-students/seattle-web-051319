console.log('pick off the values of properties within an object.')
console.log('variable names must match object key names.')
let oo = {name: 'Lawn Mower', price: 140}
let {name, price} = oo
console.log('name:', name)
console.log('price:', price)
console.log()

console.log('create objects with existing variables.')
console.log('refer to existing variable names.')
console.log('the object will create a key/value pair where the key is the variable name')
console.log('and the value is the variable value.')
let city = 'Seattle'
let state = 'Washington'
let o2 = {city, state}
console.log(02)
console.log()

console.log('object destructuring is a great way to console.log values and their names')
console.log({city})
console.log({state})
