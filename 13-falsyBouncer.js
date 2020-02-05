// INSTRUCTIONS

// Falsy Bouncer

// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.


// SOLUTION

function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    // my code

    // we create an empty array
    let newArr = [];
    // we loop through our given array arr
    for (let i = 0; i < arr.length; i++) {
        // check if the current element evaluates to true, and if it does push it to our empty array newArr
        // if it doesn't, do nothing
        if (arr[i]) {
            newArr.push(arr[i])
        }
    }
    // return our newArr containing all elements that were pushed into it by our if statement
    return newArr
    // my code
}

bouncer([7, "ate", "", false, 9]);


