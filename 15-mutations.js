// INSTRUCTIONS

// Mutations

// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".


// SOLUTION

// Got stuck on this for a while.
// At first I wrote this:
function mutation(arr) {
    // My code
    let regex = RegExp(arr[1], 'i');
    return regex.test(arr[0]);
    // My code
}

mutation(["hello", "hello"]);

// But about half of the tests weren't passing because I was only checking for a literal string(when arr[1] occured exactly)
// And not checking for the occurence or not of each letter
// Checked the Hint(not the solution), saw a relevant link of indexOf(), went through MDN to see how the method works and wrote:
function mutation(arr) {
    // My code
    let lett = arr[1].toLowerCase();
    let str = arr[0].toLowerCase();
    for (let i = 0; i < arr[1].length; i++) {
        return str.indexOf(lett[i]) != -1
    }
    // My code
}

mutation(["hello", "hey"]);

// Still one of the tests wasn't passing: mutation["hello", "hey"]
// After a while of not figuring out what was wrong, decided to check the solution :(
// Found out I didn't write my conditional statement well enough.

function mutation(arr) {
    // Change both strings to lowercase
    let lett = arr[1].toLowerCase();
    let str = arr[0].toLowerCase();
    // Iterate through the second(arr[1]) element in the array, and check if it's at any index in the first(arr[0]) element
    // String.indexOf() returns -1 when a value is not present in a string, so we use this in our if statement
    for (let i = 0; i < arr[1].length; i++) {
        if (str.indexOf(lett[i]) == -1) {
            return false
        }
    } return true
}
mutation(["hello", "hey"]);

// And it works!!!


