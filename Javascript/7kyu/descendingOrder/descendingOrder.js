// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

export default function descendingOrder(n){
    return n.length <= 1 ? n:Number(n.toString(10).split('').map(t => parseInt(t)).sort((a,b) => a<b).join(''))
    }