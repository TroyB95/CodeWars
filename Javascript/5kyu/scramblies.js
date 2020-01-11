// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
    function getFrequency(string) {
       let freq = {};
       for (let i=0, len = string.length;i<len;i++) {
         let character = string.charAt(i);
           freq[character] ? freq[character]++ : freq[character] = 1;
       }
       return freq;
   };
    function compareObjectValues(obj1, obj2) {
      for(var value in obj2){
             if(obj1[value] < obj2[value] || obj1.hasOwnProperty(value) === false) {
                 return false;
             }
     }
     return true;
   }
   
   return compareObjectValues(getFrequency(str1), getFrequency(str2));
 }