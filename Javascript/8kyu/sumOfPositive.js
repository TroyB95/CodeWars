// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

const positiveSum=a=>{
    let filtered = a.filter(x=>x>0?x:null);
    return filtered.length > 0 ? filtered.reduce((x,y)=>y+x): 0;
    }