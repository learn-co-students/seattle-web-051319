// --- DIRECTIONS

// Given an array and chunk size, divide the array into many subarrays where each subarray is of length size

// --- EXAMPLES

// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// --- SOLUTION W/ FOR LOOP
// --- Space Complexity = O(N)
// --- Time Complexity = O(N)

function chunk(array, size) {
  const chunked = [];
  let subArray = [];
  for (int of array) {
    subArray.push(int);
    if (subArray.length === size) {
      chunked.push(subArray);
      subArray = [];
    }
  }
  if (subArray.length > 0) {
    chunked.push(subArray);
  }
  return chunked;
}

// --- SOLUTION W/ SLICE
// --- Space Complexity = O(N)
// --- Time Complexity = O(N)

// function chunk(array, size) {
//   const chunked = [];
//   let index = 0;
//   while (index < array.length) {
//     chunked.push(array.slice(index, size + index));
//     console.log(chunked)
//     index += size;
//   }
//   return chunked;
// }
 
// chunk([1, 2, 3, 4, 5], 2)
chunk([1, 2, 3, 4, 5], 7)