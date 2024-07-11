let LongestSubArray = function(arr, k){
    let n = arr.length;
    let maxlen = 0;
    let sum =0;
    for(let i =0;i<n;i++)
        {
            for (let j=i;j<n;j++){
                for (let k =i;k<=j;k++){
                    sum += arr[k];
                }
                if (sum ==k)
                    {
                        maxlen = Math.max(maxlen ,(j-i+1))
                    }
            }
        }
    return maxlen;
}
const arr= [1,-2,3,4,5,-6,7];
let k =9;
const result2 = LongestSubArray(arr,2);
console.log("LongestSubArray is :",result2);