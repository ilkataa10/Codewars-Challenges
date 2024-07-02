// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)


// My solution
function isIsogram(str){
  // Convert the string to lowercase to make the function case-insensitive
    str = str.toLowerCase();
    
    // Create a new Set to keep track of characters we have seen
    let charSet = new Set();
    
    // Iterate over each character in the string
    for (let char of str) {
        // If the character is already in the set, return false
        if (charSet.has(char)) {
            return false;
        }
        // Add the character to the set
        charSet.add(char);
    }
    
    // If no duplicates were found, return true
    return true;
}