// INSTRUCTIONS

// Finders Keepers

// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). 
// If no element passes the test, return undefined.


// SOLUTIONS

function findElement(arr, func) {

    // return arr.find(func);
    
    // The function func is called for all elements of the array arr, one after another
    // If it returns true, the search is stopped, the item is returned. If nothing found, undefined is returned.
    
    // OR

    // loop through the array
    for (let i = 0; i < arr.length; i++) {
        // pass each element of the array into the function func and check if it returns true
        if (func(arr[i])) {
            // return the element of the array that resolves the above to true
            return arr[i]
        }
    }
    // return undefined if there is no element of the array that makes the function true
    // this doesn't have to be included, but added it for readability(?)
    return undefined
}

findElement([1, 2, 3, 4], num => num % 2 === 0);


// Came across the find() array method in javascript.info
// This challenge didn't say not to use a method, so :)

// EDIT

// Wrote another solution using a for loop just because I can.