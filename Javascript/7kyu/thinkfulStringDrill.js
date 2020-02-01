// Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

// Example:
// Repeater.repeat("a", 5)
// should return

// "aaaaa"

function repeater(string, n){
    let finalString = "";
    
    for (let i = 0; i < n; i++) {
      finalString += string;
    }
    
    return finalString;
  }