// Write function avg which calculates average of numbers in given list.

function find_average(arr) {
    return arr.reduce((x,y) => y+x) / arr.length;
  }