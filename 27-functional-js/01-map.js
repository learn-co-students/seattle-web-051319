// This function accepts two parameters: an array and a callback function.
// It takes each element in the array, performs the funcion with the element
// as input and replaces the modified element back in the array in its original
// position.
// This function returns a new array with the modified elements.
function map(arr, func) {
  let results = []
  for (let i = 0; i < arr.length; i++) {
    // pass each element in to the function
    let result = func(arr[i])
    results.push(result)
  }  
  return results
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
let square = n => n * n
console.log(map(nums, square))