const palindromes = function (string) {
    string = string.replace(/[!., ]/g, "").toLowerCase() //regex replace(deletes) !.,(empty space)
    let reverseStr = string.split("").reverse().join(""); 
 

 if (reverseStr == string) {
    return true
 } else {
    return false
 }
 console.log(reverseStr)
};

// Do not edit below this line
module.exports = palindromes;
