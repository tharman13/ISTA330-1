/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the m-element does not exist return -1.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input) {
    var array = input.sort();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i+1]) {
            return array[i];
        }
    }
    return -1;
};