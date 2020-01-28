// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr) {
    // Going for most complex / convoluted solution lol!
      let resultsArrs = [];
      let topNum = 0;
      let topAmount = [];
      let topNumbers = [];
      
      arr.forEach(curNum => {
        resultsArrs.push(arr.filter((num, i) => {
          return curNum === num
        }))
      
        while(arr.indexOf(curNum) !== -1)
          arr.splice(arr.indexOf(curNum), 1)
        })
      
      arr.forEach(num => {
        resultsArrs.push([num])
      })
      
        
        resultsArrs.forEach((arr, i) => {
        if(arr[i] > topNum) {
              topNum = arr[1];
            };
          if(arr.length > topAmount) {
            topAmount = arr.length;
            topNum = arr[1];
            }
          })
          
          return topNum;
            
    }