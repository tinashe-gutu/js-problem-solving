/* 
Sort "array" so that all elements with the value of zero are moved to the
end of the array, while the other elements maintain order.
*/

/**
 * moves all zeroes in the array to the end of the array
 * @param {number[]} array  array of number zeroes mixed.
 * @returns {number[]}  array of numbers with zeros at the end.
 */

function removeZeros(array) {
    let valueHolder;
    for(i=0; i<array.length; i++){
        if(array[i-1] == "0" && (array[i]!=="0" && array[i]!==0)){
            for(j=i-1; j>=0; j--){
                if(array[j] =='0'){
                    valueHolder = array[j+1];
                    array[j+1] = array[j];
                    array[j] = valueHolder;
                }
            } 
        }
    }
return array;
}