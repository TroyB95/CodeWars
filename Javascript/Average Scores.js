// Create a function that returns the average of an array of numbers ("scores"),
// rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

function average(scores) {
  let amount = scores.length;
  let total = scores.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  let answer = total / amount;
  return Math.round(answer);
}
