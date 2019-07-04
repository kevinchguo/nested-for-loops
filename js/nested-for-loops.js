/**
 * Returns a string representation of a 2-dimensional data structure 
 * @param {number} depth 
 * @param {number} [width=depth] 
 * @returns {string}
 */
function nestedForLoops (depth, width = depth) {
  let result = "\n";
  let empStr = '';
  // Write code here
  
  empStr += result
  for (let x = 0; x < depth; x++) {
    for (let y = 0; y < width; y++) {
      empStr += "{x:" + y + ", y:" + x + "}"
      if (y < width - 1) {
        empStr += ", "
      }
    }
    empStr += result
  }
  return empStr
};

// To see your console output outside the tests add function calls here.
console.log(nestedForLoops(3));
console.log(nestedForLoops(10,5))
