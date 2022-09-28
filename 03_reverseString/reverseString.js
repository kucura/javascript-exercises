const reverseString = function(word) {
    const arrayStrings = word.split("");
    const reverseArray = arrayStrings.reverse();
    const joinArray = reverseArray.join("");
    return joinArray;  
};

// Do not edit below this line
module.exports = reverseString;
