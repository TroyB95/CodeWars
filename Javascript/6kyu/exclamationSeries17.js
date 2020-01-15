// Each exclamation mark weight is 2; Each question mark weight is 3. Put two string left and right to the balance, Are they balanced?

// If the left side is more heavy, return "Left"; If the right side is more heavy, return "Right"; If they are balanced, return "Balance".

// Examples
// balance("!!","??") === "Right"
// balance("!??","?!!") === "Left"
// balance("!?!!","?!?") === "Left"
// balance("!!???!????","??!!?!!!!!!!") === "Balance"
// Note
// Please don't post issue about difficulty or duplicate.

function balance(left,right){
    const totalWeight = string => {
      let weight = 0;
      for(let i = 0; i < string.length; i++) {
        switch(string[i]) {
            case '!': 
              weight += 2;
              break;
            case '?': 
              weight += 3;
              break;
        }
      }
      return weight;
    }
    
    let leftWeight = totalWeight(left);
    let rightWeight = totalWeight(right);
  
    return leftWeight > rightWeight ? 'Left' : leftWeight < rightWeight ? 'Right' : 'Balance';
    
  }