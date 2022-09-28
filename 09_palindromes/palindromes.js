const palindromes = function (string) {
    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    
    if (string === newString){
        return true 
    } else {
        return false
    }

};

// Do not edit below this line
module.exports = palindromes;
