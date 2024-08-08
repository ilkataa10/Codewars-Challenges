// the first n terms of the sequence (n is the input parameter).
// You will need to figure out the rule of the series to complete this.

// Rules
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return "0.00".

// You will only be given Natural Numbers as arguments.

// Examples (Input --> Output)
// n
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

// My solution 

function SeriesSum(n) {
    if (n === 0) return "0.00";

    let sum = 0;

    for (let i = 0; i < n; i++) {
        let denominator = 1 + 3 * i;
        sum += 1 / denominator;
    }

    return sum.toFixed(2);
}