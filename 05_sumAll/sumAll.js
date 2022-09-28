const sumAll = function(firstNumber,secondNumber) {
 if (Number.isInteger(firstNumber) && Number.isSafeInteger(secondNumber))   {   // check if number is integer (test 5 and 6)
    
    if (firstNumber<0 || secondNumber<0) { // checks if numbers are negative
        return 'ERROR'
    }  else if (firstNumber<secondNumber){ // checks if second number is greater and summs it
    return ((secondNumber-firstNumber)+1) * (firstNumber + secondNumber) / 2
    } else if (firstNumber>secondNumber) { // cheks if first number is greater and summs it
        return ((firstNumber-secondNumber)+1) * (firstNumber + secondNumber) / 2
    }
} else {
    return 'ERROR'
}

}


// Do not edit below this line
module.exports = sumAll;
