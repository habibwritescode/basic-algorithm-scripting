// INSTRUCTIONS

// Return Largest Numbers in ArraysPassed
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].


// SOLUTION

function largestOfFour(arr) {
    // You can do this!
    // my code

    // declare and initialize an empty array to store the length values
    let newArr = [];
    // loop through our array of arrays
    for (let i = 0; i < arr.length; i++) {
        // unpack each sub-array with the spread operator and return the largest number with the max() method
        let maxNum = Math.max(...arr[i])
        // push the largest number of each sub-array into our empty array newArr
        newArr.push(maxNum);
    }
    return newArr;

    // my code
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 2857, 1]]);

// This was also straightforward. 
// The max() method from 'Find longest word in a string' challenge came in handy here too.