// This function accepts two parameters: an array and a callback function.
// It iterates over the array and passes each element in the array to
// the callback function one by one. This function returns nothing.
function forEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i])
  }
}

// inline function passed as parameter
// forEach(arr, (item) => {
//   console.log(item)
// })

let arr = [1, 2, 3, 4, 5]
let print = (item) => {
  console.log(item)
}

forEach(arr, print)