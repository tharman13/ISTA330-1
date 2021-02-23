/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {
  if (n === 0) return [];
  if (n === 1) return [[1]];
  var out = [];
  for (let k = 1; k <= n; k++) {
      var row = [];
      for (let j = 0; j < k; j++) {
          if (j === 0 || j === k - 1) {
              row.push(1);
          } else {
              row.push((out[k-2][j-1] + out[k-2][j]));
          }
      }
      out.push(row);
  }
  return out;
};