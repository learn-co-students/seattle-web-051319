// --- DIRECTIONS

// Write a function named firstNonRepeatingLetter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// --- EXAMPLES
// firstNonRepeatingLetter('stress')
// -> 't'
// firstNonRepeatingLetter('Teeter')
// -> 'r'
// firstNonRepeatingLetter('deed')
// -> ''

// --- SOLUTION
// --- Space Complexity = O(N)
// --- Time Complexity = O(N)

function firstNonRepeatingLetter(str) {
  const lowerString = str.toLowerCase();
  const charMap = {};
  for (let i = 0; i < lowerString.length; i++) {
    let currentLetter = lowerString[i];
    if (charMap[currentLetter]) {
      charMap[currentLetter] ++
    } else {
      charMap[currentLetter] = 1;
    }
  }
  for (let i = 0; i < lowerString.length; i++) {
    // let currentValue = charMap[lowerString[i]];
    if (charMap[lowerString[i]] === 1) {
      return str[i];
    }
  }
}

firstNonRepeatingLetter('stress') 
// firstNonRepeatingLetter('teeter');
// firstNonRepeatingLetter('deed');