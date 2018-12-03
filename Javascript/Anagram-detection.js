// write the function isAnagram
var isAnagram = function(test, original) {
  debugger;
  let checker = true;
  for(var i = 0; i < original.length; ++i) {
    if(test.toLowerCase().indexOf(original[i].toLowerCase()) !== -1) {
      checker = true;
    } else {
      checker = false;
    }
    
    if(checker === false || test.length !== original.length) {
      return false;
    } else if (checker === true && i === original.length - 1) {
      return true;
    }
}

}