// INSTRUCTIONS

// Reverse a String

// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

function reverseString(str) {
    // my code
    let reverse = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i]
    }
    // my code
    return reverse;
}

reverseString("hello");

// This stumped me for a while. 
// I tried to follow the instruction and turned the string into an array.
// But I couldn't iterate through each letter since the array turned the string into a single array item. 
// Then I realised I didn't have to follow the suggestion if I could come up with my own solution.

// I knew I had to iterate through the string starting from the last letter, and that was easy to get with the for loop. 
// I also knew I had to concatenate each letter starting from the last one, so i did str[i] += str[i].
// But it didn't turn out like I expected.

// After some time of trying to see what was wrong and not getting it.
// I decided to use Read-Search-Ask. 
// Read the Hint(not the solution) and realised I needed to create a new string and initialize it to a blank string. 
// Then use it to concatenate the characters returned from the for loop. Everything fell into place after that.