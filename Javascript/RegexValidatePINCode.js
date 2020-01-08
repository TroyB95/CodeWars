// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything
//but exactly 4 digits or exactly 6 digits.

//If the function is passed a valid PIN string, return true, else return false.

function validatePIN(pin) {
  if (pin.length === 4 || pin.length === 6) {
    let arr = pin.split("");

    let newArr = arr.filter(num => isNaN(num) === false);

    if (newArr.length === 4 || newArr.length === 6) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
