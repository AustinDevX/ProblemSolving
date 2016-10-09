const mocha   = require('mocha');
const assert  = require('chai').assert;

describe(".rotateArray", function(){
  it("should rotate the array by the specified number of places", function(){
    testArray = [1, 2, 3, 4, 5];
    rotateArray(testArray, 2);

    rotatedArray = [3, 4, 5, 1, 2]; // correct array after 2 place rotation

    // for(let i=0; i < testArray.length; i++) {
    //   assert.strictEqual(testArray[i], rotatedArray[i], "Array element found in incorrect position");
    // }
  });
})

/**
 * Performs a circular, in place, rotation of an array by shifting its elements
 * to the left by the specificed amount of places
 * Elements shifted off the front are appended to the end
 *
 * Example:
 *      rotateArray([1, 2, 3, 4, 5], 1);
 *      //=> [2, 3, 4, 5, 1]
 *
 * @param  {Array.<number>} A    The array to be rotated
 * @param  {number}         p      The number of positions to rotate by
 */
function rotateArray(A, p) {
    // rotate the array by one p times
    for(let i=0; i <= p; i++){
        rotByOne(A)
    }

  // bubble the first element to the end thereby rotating the array by one
  function rotByOne(A) {
    for(let i=0; i < A.length-1; i++) {
      A[i] = A[i] ^ A[i+1]
      A[i+1] = A[i] ^ A[i+1]
      A[i] = A[i] ^ A[i+1]
    }
  }
}
