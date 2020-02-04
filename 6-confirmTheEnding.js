// INSTRUCTIONS

//Confirm the Ending

//Check if a string (first argument, str) ends with the given target string (second argument, target).

//This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
//But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.


// SOLUTION

function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    // my code

    // construct a new RegExp object
    let newRegex = new RegExp(target + '$') // same as /n$/, where n is the string we want to match and $ makes sure it is at the end
    // .test() method returns a boolean. assign that boolean to the result variable
    let result = newRegex.test(str)
    // return the boolean gotten from above
    return result;
    
    // my code
}

confirmEnding("Bastian", "n");

// This was a bit troublesome.
// I knew regex could do this immediately I saw the question.
// Tried target$.test(str) at first, because target is a variable, but it didn't work.
// Then I realised, since the variable is dynamic, I needed a way to concatenate 'target' with '$' that would check for it at the end of str.
// The fcc currciculum didn't mention this, so I used the search from the RSA method, and found the constructor on Stack Overflow.