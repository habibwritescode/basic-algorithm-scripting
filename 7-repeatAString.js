// INSTRUCTIONS

// Repeat a String Repeat a String

// Repeat a given string str (first argument) for num times (second argument). 
// Return an empty string if num iS not a positive number.


// SOLUTION

function repeatStringNumTimes(str, num) {
    // repeat after me
    // my code
    // declare and initialize an empty string to concatenate repetitions of str with
    let newStr = '';
    // use a for loop to repeat str for every increment of i when i is at least 1
    for (let i = 1; i <= num; i++) {
        // checks if num is a positive number i.e 1 or greater than 1
        if (num >= i) {
            newStr += str;
        }
    }
    // returns an empty string if num is not a positive number i.e zero or less than zero
    return newStr;
    // my code
}

repeatStringNumTimes("abc", 5);

// Knew what I had to do.
// Logic took a while to fine-tune, but later fell into place.

