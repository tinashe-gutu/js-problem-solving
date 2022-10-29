/* Brief: Given a list of integers and a single sum value, r
eturn the first two values (parse from the left please) in order of appearance that add up to form the sum.
If there are two or more pairs with the required sum, 
the pair whose second element has the smallest index is the solution. 

*/

/** return pair of numbers that sum to a target sum
 * @param {number[]} arr array of numbers
 * @param {number} sum target sum
 * @return {number[]} Array
 */


 function sumPairs(arr, sum){
    let pair;
    const objOfNum = {}
    arr.forEach((element, i)=>objOfNum[element]=i)
    arr.forEach((element,i) => { 
        let compliment = sum - element;
        let complimentIndex = objOfNum[compliment]
        if(complimentIndex!==undefined){
            if(pair!==undefined &&compliment === pair[1]){
                return pair;
            }else if(pair!==undefined && i >= pair[2]){
                return pair;
            }
            if(pair===undefined || complimentIndex<pair[2]){
                if(i!==complimentIndex){
                pair = [element,arr[complimentIndex],complimentIndex]
              }
            }
        }
    })

    if(pair!==undefined){
        pair.pop();
    }
    return pair;
}