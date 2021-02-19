// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
  let largestArr = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNum = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNum) {
        largestNum = arr[i][j];
      }
    }

    largestArr[i] = largestNum;
  }
  return largestArr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

// Test cases

// Passed
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.

// Passed
// largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].

// Passed
// largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].

// Passed
// largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) should return [25, 48, 21, -3].
