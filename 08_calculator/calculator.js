const add = function(x,y) {
	return x+y
};

const subtract = function(x,y) {
	return x-y
};

const sum = function(array) {
	var summ=0
  for(let i = 0; i < array.length; i++){
    summ=summ+(array[i])
 }
  return summ
};

const multiply = function(array) {
  var summ=1
  for(let i = 0; i < array.length; i++){
    summ=summ*(array[i])
 }
  return summ
};

const power = function(x,y) {
	return x**y
};

const factorial = function(n) {
  if(n == 0 || n == 1){
        return 1;
    } else {
        return n * factorial(n-1);
    }
}
	


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
