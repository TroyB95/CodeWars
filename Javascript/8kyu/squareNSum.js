// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1 ^ 2 + 2 ^ 2 + 2 ^ 2 = 9.

function squareSum(n) {
    return n.length > 0 ? n.map(x => Math.pow(x, 2)).reduce((a, c) => a + c) : 0s;
}