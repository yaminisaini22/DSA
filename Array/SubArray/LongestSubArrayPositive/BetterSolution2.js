//using map and key value and prefix sum
let LongestSubArray = function(arr , k){
    let maxlen =0;
    let sum =0;
    let presum = new Map();
    for (let i =0; i<arr.length; i++){
        sum += arr[i];

        // sum ===k , length will be i+1;
        if (sum ==k){
            maxlen = Math.max(maxlen , i+1);
        }

        // rem value
        let rem = sum -k;

        if (presum.has(rem)){
            let len = i - presum.get(rem);
            maxlen = Math.max(maxlen, len);
        }

        // insertion of presum
        // one extra test case or condition
        if (!presum.has(sum)){
            presum.set(sum ,i); // now insertion
        }
    }
    return maxlen;
}
const arr= [2,0,0,3];
let k =3;
const result2 = LongestSubArray(arr,k);
console.log("LongestSubArray has length :",result2);