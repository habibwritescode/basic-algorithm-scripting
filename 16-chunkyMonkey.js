// INSTRUCTIONS

// Chunky Monkey

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


// SOLUTION

// This took a long while.
// Tried and tried, but this was the best I could come up with:
function chunkArrayInGroups(arr, size) {
    // Break it up.
    // My code
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, size));
    }
    return newArr;
    // My code
}
chunkArrayInGroups(["a", "b", "c", "d"], 2); // returns [ [ 'a', 'b' ], [] ]

// After some time of still not being able to get it right, I checked the solution :(
function chunkArrayInGroups(arr, size) {
    // Break it up.
    // My code
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size)); // The elusive thing was here(i + size)
    }
    return newArr;
    // My code
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

// Problem with my code was that, after the first iteration, i equals size.
// So slice() was copying arr starting from i and stopping at size, but not including size.
// Therefore was returning an empty array because it was actually not copying anything.

// So close!!!