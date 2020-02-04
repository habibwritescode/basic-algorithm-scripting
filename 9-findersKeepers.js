// INSTRUCTIONS

// Finders Keepers

// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). 
// If no element passes the test, return undefined.


// SOLUTIONS

function findElement(arr, func) {
    return arr.find(func);
}

findElement([1, 2, 3, 4], num => num % 2 === 0);


// Came across the find() array method in javascript.info
// This challenge didn't say not to use a method, so :)

// The function func is called for all elements of the array arr, one after another
// If it returns true, the search is stopped, the item is returned. If nothing found, undefined is returned.