/* Description:
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of theeach other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK" */

var isAnagram = function(test, original) {
  if (test.length === original.length) {
    for (let i = 0; i < test.length; ++i) {
      if (original.toLowerCase().includes(test[i].toLowerCase())) {
        console.log('includes');
      } else {
        return false;
      }
    }
    return true;
  } else return false;
};
