let maxSubarraySum = function(arr){
    let n = arr.length;
    let sum =0;
    let maxsum =Number.MIN_SAFE_INTEGER;
    for (let i=0;i<n;i++){
        // sum condition;
        sum += arr[i];
        // sum is negative make it zero
        if (sum <0){
            sum =0;
        }
        //if sum is greater than max sum , upgrade maxsum
        if (sum >maxsum){
            maxsum = sum;
        }
        // empty array
        if (maxsum < 0) maxsum = 0;
    }
    return maxsum
}
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubarraySum(arr);
console.log("The maximum subarray sum is: " + result);
