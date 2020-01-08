Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false



function XO(str) {
  var iCount = 0;
  var xCount = 0;
    
  var nStr = str.toLowerCase();
    for(var i = 0; i < str.length; i++){
      if(nStr[i] === "o"){
          iCount++;
      } else if(nStr[i] === "x") {
          xCount++;
      }
    }
      if (iCount === xCount){
            return true;
      } else if ( iCount === 0 && xCount === 0){
            return true;
      } else {
        return false;
        }
            
};
