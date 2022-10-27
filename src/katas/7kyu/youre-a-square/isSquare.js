/* Brief: Given an integral number, determine if it's a square number:
    PROGRAME:
        name: isSquare
        params: num - number
        returns: boolean 
    ==========================
    psuedo-code:
        if the square root of n is equal to square root of n rounded up:
            return true
        else
            return false
*/

/**
 * Checks if number is a square number
 * @param {number} num - number to be checked
 * @returns {boolean}
 */

function isSquare(num) {
  return Math.sqrt(num) === Math.ceil(Math.sqrt(num)) ? true : false;
}

module.exports = isSquare;
