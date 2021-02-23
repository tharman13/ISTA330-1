
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

var largestSubarray = function(input) {
        var max = 0;
        var cur = 0;
        for(var i = 0; i<input.length; i++){ 
                cur = Math.max(input[i], cur + input[i]);
                max = Math.max(cur, max);
        }
        return max;
};
