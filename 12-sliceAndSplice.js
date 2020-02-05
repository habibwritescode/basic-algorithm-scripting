// INSTRUCTIONS

// Slice and Splice

// You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.


// SOLUTION

function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    // my code
    // copy the elements in arr2 and assign them to newArr so that we don't change arr2
    let newArr = arr2.slice();
    // starting from n index, delete 0 elements, and insert arr1(unpacked with the spread operator)
    newArr.splice(n, 0, ...arr1)
    // my code
    return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

//Pretty much straightforward, since the methods to use were provided.
