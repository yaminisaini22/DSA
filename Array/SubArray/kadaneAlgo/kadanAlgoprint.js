let maxSubarraySum = function(arr) {
    let n = arr.length;
    let sum = arr[0];
    let maxsum = arr[0];
    let start = 0;
    let startingindex = 0;
    let endingindex = 0;
    // we will intialise the starting index when the new sum is made , such that previous sum is in - negative value.
    // we will intialise the ending index till the sum >new sum;
    for (let i = 1; i < n; i++) {
        if (sum >= 0) {
            sum += arr[i];
        } else {
            sum = arr[i];
            start = i;
        }
        
        if (sum > maxsum) {
            maxsum = sum;
            startingindex = start;
            endingindex = i;
            console.log(startingindex, endingindex);
        }
    }
    
    console.log("The subarray is: [");
    for (let i = startingindex; i <= endingindex; i++) {
        console.log(arr[i] + " ");
    }
    console.log("]");
    console.log("longest subarray length",endingindex-startingindex+1);
    return maxsum;
}
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubarraySum(arr);
console.log("The maximum subarray sum is: " + result);
