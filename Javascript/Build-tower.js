/* Build Tower by the following given argument:
 number of floors (integer and always greater than 0).

 Tower block is represented as *
 
for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]

 */

function towerBuilder(nFloors) {
  let floorLength = 1;
  let spaces = nFloors - 1;
  let stringArr = [];
  for (let i = 0; i < nFloors; ++i) {
    let string = "";
    for (let j = 0; j < spaces; ++j) {
      string += " ";
    }
    for (let j = 0; j < floorLength; ++j) {
      string += "*";
    }
    for (let j = 0; j < spaces; ++j) {
      string += " ";
    }
    stringArr.push(string);
    floorLength += 2;
    spaces--;
  }
  return stringArr;
}
