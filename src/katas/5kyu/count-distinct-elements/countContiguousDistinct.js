/* Brief: Given an array of size n and an integer k, 
    return the count of distinct contiguous numbers for all windows of size k. 
    Consider that k is always lower or equals to n. 

*/

/** return array of distinct numbers within windows with k length
 *
 * @param {number} k
 * @param {number} arr
 * @returns {number[]}
 */

function countContiguousDistinct(arr, k) {
  let kArray = arr.slice(0, k);
  let distinctCount = new Set(kArray).size;
  let resualtArr = [distinctCount];
  for (let i = 0; i < arr.length - k; i++) {
    let leaving = kArray.shift();
    let entering = arr[i + k];
    if (leaving != entering && isInArray(kArray, leaving)) {
      if (!isInArray(kArray, entering)){
        distinctCount++;
      }
    } else if (leaving != entering && !isInArray(kArray, leaving)) {
      if (isInArray(kArray, entering)) {
        distinctCount--;
      }
    }
    kArray.push(entering);
    resualtArr.push(distinctCount);
  }
  return resualtArr;
}

/**Checks if number is in a given array
 *
 * @param {number[]} arr - subarray of original array
 * @param {number} item  - target number
 * @returns {boolean}
 */
function isInArray(arr, item) {
  for (const num of arr) {
    if (num === item) {
      return true;
    }
  }
  return false;
}

module.exports = countContiguousDistinct;
