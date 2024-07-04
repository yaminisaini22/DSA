/*
Given an array arr, the task is to find the largest element in it.
Examples:

Input: arr= [1, 8, 7, 56, 90]
Output: 90
Explanation: The largest element of given array is 90.
Input: arr = [5, 5, 5, 5]
Output: 5
Explanation: The largest element of given array is 5.
Input: arr = [10]
Output: 10
Explanation: There is only one element which is the largest
*/
class Solution{
    largestElement(arr){
        const arrSort = arr.sort((a,b)=>a-b);
        return arrSort[arrSort.length-1];

    }
}
const arr =[2,4,5,6,7,9];
let solution = new Solution;
const result = solution.largestElement(arr);
console.log("Largest element is :",result);