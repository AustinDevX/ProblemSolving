const mocha   = require('mocha');
const assert  = require('chai').assert;

describe("Array Rotation", function() {
  describe(".rotateArray", function(){
    it("should rotate the array by the specified number of places", function(){
      testArray = [1, 2, 3, 4, 5];
      rotateArray(testArray, 2);
      rotatedArray = [3, 4, 5, 1, 2]; // correct array after 2 place rotation
      assert.deepEqual(testArray, rotatedArray);
    });
  });

  describe(".rotateByOne", function(){
    it("Should shift each element in the list to the left by one place", function() {
      testArray = [1, 2, 3];
      rotateByOne(testArray);
      rotatedArray = [2, 3, 1];
      assert.deepEqual(testArray, rotatedArray);
    });
  });
});

/**
 * Performs a circular, in place, rotation of an array by shifting its elements
 * to the left by the specificed amount of places
 * Elements shifted off the front are appended to the end
 *
 * Example:
 *      rotateArray([1, 2, 3, 4, 5], 1);
 *      //=> [2, 3, 4, 5, 1]
 *
 * @param  {Array.<number>} A     The array to be rotated
 * @param  {number}         p     The number of positions to rotate by
 */
function rotateArray(A, p) {
    // rotate the array by one p times
    for(let i=1; i <= p; i++){
        rotateByOne(A)
    }
}

/**
 * Bubbles the first element to the end of the list thereby performing a single rotation
 * The array is rotated in place
 *
 * @param  {Array.<number>} A     The array to be rotated
 */
function rotateByOne(A) {
  for(let i=0; i < A.length-1; i++) {
    // bit swap elements
    A[i] = A[i] ^ A[i+1]
    A[i+1] = A[i] ^ A[i+1]
    A[i] = A[i] ^ A[i+1]
  }
}
