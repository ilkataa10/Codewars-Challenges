// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34

// My solution

function opposite(number) {
    let result;
    if (!isNaN(Math.sign(number))) {
      result = number * (-1);
    }
    return result;
  }