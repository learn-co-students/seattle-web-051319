// Input: an array and an "accumulator" function
//
// The accumulator function accepts two parameters and returns one value.
// accum(soFar, nextValue) { /* do something */ return soFar }
//
// Output: a single value
function reduce(arr, func, initial) {
  let accumulator = initial
  for (let i = 0; i < arr.length; i++) {
    accumulator = func(accumulator, arr[i])
  }
  return accumulator
}

let nums = [1, 2, 3, 4, 5, 6, 7, 89, 9, 120]
let sum = (total, nextNum) => {
  return total + nextNum
}
console.log(reduce(nums, sum, 0))

let votes = ['bush', 'bush', 'bush', 'hedge', 'shrub', 'hedge', 'shrub', 'shrub', 'shrub', 'shrub', 'strawberry']
// votes is an object representing votes so far
let tally = function(votes, vote) {
  // initialize at zero for votes we've not seen
  if (votes[vote] === undefined) {
    votes[vote] = 0
  }
  // now everything is guaranteed to have a number, so increment
  votes[vote]++
  return votes
}
console.log(reduce(votes, tally, {}))


