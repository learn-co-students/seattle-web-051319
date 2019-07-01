console.log('you can pick off elements inside an array')
let aa = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('aa:', aa)
let [one, two, ...rest] = aa
console.log('one, two, ...rest:', one, two, rest)
console.log()

console.log('you can collect any number of function parameters')
function oneTwoRest(one, two, ...rest) {
  console.log('one, two, ...rest:', one, two, rest)
}

oneTwoRest('just one')
oneTwoRest('one', 'and two')
oneTwoRest('one', 'and two', 'and then just three')
oneTwoRest('one', 'and two', 'then three', 'and four', 'and', 'much', 'much', 'more')
console.log()

console.log('use the spread operator to quickly make a copy of an array!')
console.log('using just the equals sign will set a variable to reference an array.')
console.log('manipulating a reference to an array will change the original array too.')
let original1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let reference = original1
reference[0] = 99
console.log('original1:', original1)
console.log('reference:', reference)
console.log()

console.log('using spread to copy the array will allow you to change the copy without modifying the original.')
let original2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let copy = [...original2]
copy[0] = 99
console.log('original2:', original2)
console.log('     copy:', copy)
