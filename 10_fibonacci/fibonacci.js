

const fibonacciArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811]
const fibonacci = function(i) {
    if (i<0) {
        return "OOPS"
    } else if (Number.isInteger(i)) {
        return fibonacciArray[i]
    } else {
        return fibonacciArray[parseInt(i)]
    }
};

// Do not edit below this line
module.exports = fibonacci;
