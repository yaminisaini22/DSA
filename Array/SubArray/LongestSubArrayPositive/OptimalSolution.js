class Solution{
    lenOfLongSubarr(arr,n, k){
        let right = 0;
        let left = 0;
        let maxlen =0;
        let sum = arr[0];
        
        while (right<n){
            //sum is greater than target
            while(left <= right &&sum>k){
                sum -= arr[left];
                left ++;
            }
            // sum is equal to target
            if (sum == k){
                maxlen = Math.max(maxlen , right-left+1)
            }
            //sum is lesser than target
            right ++;
            if (right<n) sum += arr[right];
        }
        return maxlen;       
}
}
const arr =[2,3,5,1,9];
let n = arr.length;
let k =10;
let solution = new Solution;
const result = solution.lenOfLongSubarr(arr,n,k)
console.log("length of longest subarray is :",result);