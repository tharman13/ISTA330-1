
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

var largestSubarray = function(input) {
        var totalmax = 0;
        var tempmax = 0;
        for (var i = 0; i < input.length; i++) {
                tempmax += input[i];

                if (tempmax > totalmax) {
                totalmax = tempmax;
                }
                if (tempmax < 0) {
                        tempmax = 0;
                }
        }
        return totalmax;
};

