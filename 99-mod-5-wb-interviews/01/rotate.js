// --- DIRECTIONS

// Given an array, rotate the array to the right by k steps, where k is non-negative.

// --- EXAMPLES

// Input: [1,2,3,4,5,6,7] and k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Input: [-1,-100,3,99] and k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// --- SOLUTION #1
// --- Space Complexity = O(N)
// --- Time Complexity = O(N)

// function rotate(array, k) {
//   const rotated = [];
//   let pos = array.length - k;
//   while (rotated.length < array.length) {
//     rotated.push(array[pos]);
//     pos++;
//     pos = pos === array.length ? 0 : pos
//   }
//   return rotated
// }

// --- SOLUTION #2
// --- Space Complexity = O(1)
// --- Time Complexity = O(N)

function rotate(array, k) {
  const temp = array.splice(array.length - k, k);
    for(var i = temp.length - 1; i >= 0; i--) {
      array.unshift(temp[i])
    }    
  return array
}

// rotate([1,2,3,4,5,6,71], 3);
rotate(['the', 'values', 'do', 'not', 'matter'], 2)
// rotate([-1,-100,3,99], 2)