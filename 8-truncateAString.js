// INSTRUCTIONS

// Truncate a String

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
// Return the truncated string with a ... ending.


// SOLUTION

function truncateString(str, num) {
    // Clear out that junk in your trunk
    // my code

    // check if the string's length is greater than the value of num
    if (str.length > num) {
        // if the above is true, we extract the part of the string starting from the beginning(0) till the value of num(included)
        // then join ... to the end of the string that the slice() method returns
        return str.slice(0, num) + '...';
    }
    // if the length of str is less than or equal to the value of num, we return str as it is.
    return str;
    //my code
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);