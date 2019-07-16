/**
 * Returns a string representation of a 2-dimensional data structure
 * @param {number} depth
 * @param {number} [width=depth]
 * @returns {string}
 */
function nestedForLoops(depth, width = depth) {
  let result = "\n";
  let empStr = "";

  empStr += result;
  //just like an x-y graph x-axis is the first for loop, y-axis is the second for loop
  for (let rows = 0; rows < depth; rows++) {
    //first for loop creates the rows
    for (let columns = 0; columns < width; columns++) {
      //second for loop makes the columns
      empStr += "{x:" + columns + ", y:" + rows + "}";
      if (columns < width - 1) {
        empStr += ", ";
      }
    }
    empStr += result;
  }
  return empStr;
}
