const removeFromArray = function(array, num) {
    
    for( i = 0; i < array.length; i++){ 
        if ( array[i] === arguments[1]) { 
            array.splice(i,1); 
        }
    }

    for( j = 0; j < array.length; j++){ 
        if ( array[j] === arguments[2]) { 
            array.splice(j,1); 
        }
    }

    for( k = 0; k < array.length; k++){ 
        if ( array[k] === arguments[3]) { 
            array.splice(k,1); 
        }
    }

    for( l = 0; l < array.length; l++){ 
        if ( array[l] === arguments[4]) { 
            array.splice(l,1); 
        }
    }
    
    return array

    
}

// Do not edit below this line
module.exports = removeFromArray;
