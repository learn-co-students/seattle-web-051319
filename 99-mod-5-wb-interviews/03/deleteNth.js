// --- DIRECTIONS

// Given an array and a number N, return an array that contains each number at most N times without reordering.

// --- EXAMPLES

// deleteNth([1,1,1,1], 2)
// -> [1,1]
// deleteNth([20,37,20,21], 1)
// -> [20,37,21]
// deleteNth([1, 2, 3, 1, 2, 3, 1, 2], 2)
// -> [1, 2, 3, 1, 2, 3] 

// --- SOLUTION
// --- Space Complexity = O(N)
// --- Time Complexity = O(N)

// function deleteNth(arr, n){
//   const result = [];
//   const itemCounter = {};
//   for (let i = 0; i < arr.length; i++) {
//     const counter = itemCounter[arr[i]] || 0;
//     if (counter < n) {
//       result.push(arr[i]);
//       itemCounter[arr[i]] = counter + 1;
//     }
//   }
//   return result;
// };

// --- SOLUTION - in place
// --- Space Complexity = O(N)
// --- Time Complexity = O(N)

function deleteNth(arr, n){
  const itemCounter = {};
  for (let i = 0; i < arr.length; i++) {
    const counter = itemCounter[arr[i]] || 0;
    if (counter < n) {
      itemCounter[arr[i]] = counter + 1;
    } else {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};


// deleteNth([1,1,1,1], 2)
// deleteNth([20,37,20,21], 1)
deleteNth([1, 2, 3, 1, 2, 3, 1, 2], 2)