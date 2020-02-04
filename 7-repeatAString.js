// INSTRUCTIONS

// Repeat a String Repeat a String

// Repeat a given string str (first argument) for num times (second argument). 
// Return an empty string if num iS not a positive number.


// SOLUTION

function repeatStringNumTimes(str, num) {
    // repeat after me
    // my code
    let newStr = '';
    for (let i = 1; i <= num; i++) {
        if (num >= i) {
            newStr += str;
        }
    }
    // my code
    return newStr;
}

repeatStringNumTimes("abc", 5);

// Knew what I had to do.
// Logic took a while to fine-tune, but later fell into place.

