// INSTRUCTIONS

// Where do I Belong

// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
// The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).


// SOLUTION

function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    // My code

    // By default, the sort() function sorts values as strings.
    // To use our own sorting order, we need to supply a function as the argument of arr.sort().
    // When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
    // If the result is negative a is sorted before b.
    // If the result is positive b is sorted before a.
    // If the result is 0 no changes are done with the sort order of the two values.
    // Came across this in javascript.info and w3schools.com
    function compare(a, b) {
        return a - b;
    }
    arr.sort(compare)

    // Since our array has been sorted numerically, we check if the current element is greater than or equals the value of num
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
            // If yes, we return the index of the current element
            return i
        }
    }
    // If no, we return the length value of the array
    // This covers cases where there is an empty array or when num is greater than all elements in the array, so it will need to be inserted as the last element of the array
    return arr.length
    // My code
}

getIndexToIns([2, 5, 10], 15) //should return 3.