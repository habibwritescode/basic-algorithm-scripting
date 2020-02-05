// INSTRUCTIONS

// Title Case a Sentence

// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".


// SOLUTION

function titleCase(str) {
    // change all letters in the string to lowercase
    str = str.toLowerCase()
    // turn the string to an array where each word is an element
    let splitArr = str.split(" ")
    // iterate through each word and use replace() method to change the first letter to a capital
    let newStr = splitArr.map(word => word.replace(word[0], word[0].toUpperCase()));
    // return a single string that joins all the elements iin the array together
    return newStr.join(' ')
}

titleCase("I'm a little tea pot");


// This was troublesome.
// The best I could come up with is the code below
function titleCase(str) {
    // my code
    str = str.toLowerCase()
    let splitArr = str.split(" ")
    for (let i = 0; i < splitArr.length; i++) {
        splitArr[i][0].toUpperCase();
    }
    return splitArr.join(' ')
    // my code
}

titleCase("I'm a little tea pot");

// But the final result wasn't Title Casing, but returning as lowercase.
// Later occured to me that strings are supposed to be immutable, and maybe that's why they weren't updating.
// Tried to find another way of solving it, but after being stuck for a while, I checked the hint(not the soilution).
// One of the relevant links provided is a link to the replace() method, so I checked it out and tried to use it.
// Still couldn't get the logic right, got stuck for a while, and checked the solution :(