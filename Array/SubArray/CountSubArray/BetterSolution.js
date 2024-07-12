let countSubArray = function(arr,target){
    let n = arr.length;
    let count = 0;

    for(let i =0;i<n;i++){
        let sum =0;
        for (let j =i;j<n;j++){
            sum += arr[j];
            if (sum ==target){
                count ++;
            } 
        }
    }
    return count;
}
const arr= [2,3,5,5,5];
const result2 = countSubArray(arr,10);
console.log("Number of subarray are",result2);