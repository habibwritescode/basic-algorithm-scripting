// INSTRUCTIONS

// Find the Longest Word in a String

// Return the length of the longest word in the provided sentence.

// Your response should be a number.



function findLongestWordLength(str) {
    // my code

    // split the string into an array of strings with the split() method
    let arrOfWords = str.split(' ')
    // declare and initialize an empty array to store the length values
    let lengthArr = [];
    // loop through the split strings and return the length of each word
    for (let i = 0; i < arrOfWords.length; i++) {
        let wordsLength = arrOfWords[i].length
        // push the length of each word into an array
        lengthArr.push(wordsLength)
    }
    // use the ES6 spread operator to unpack the array and use .max() method to find the highest number and return it
    return Math.max(...lengthArr)
    // my code

}
findLongestWordLength("The quick brown fox jumped over the lazy dog");


// This was a bit straightforward. 
// I found out about the split() method while looking for better ways to solve the 'Reverse a string' challenege, and it came in handy here.