let TwoSum = function(arr , target){
 let n = arr.length;
 let left = 0 ;
 let right = n-1;
 let sum = 0;
 arr.sort((a, b) => a - b);
 while (left < right) {
    sum = arr[left]+arr[right];
    if (sum == target){
        return "Yes";
    } 
    if (sum <target){
        left ++;
    }
    else {  // sum>target
        right --;
    }
 }
 return "NO";
 
}
const arr = [2, 6, 5, 8, 11];
let k = 14;
const result2 = TwoSum(arr, k);
console.log("Does this array contain:", result2);