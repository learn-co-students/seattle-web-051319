// Input: an array, a function
// Output: a new array containing only elements from the original array
//         that return truthy for the given function
function filter(arr, func) {
  let filtered = [] 
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      filtered.push(arr[i])
    }
  }
  return filtered
}

let arr = ["veggie toast", "veggie burger", "warm veggie", "milk", "cold bevie"]
let isVegetarian = (food) => {
  return food.includes('veg')
}
console.log(filter(arr, isVegetarian))