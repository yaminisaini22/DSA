let slidingwindow = function(arr, k){
    let n = arr.length;
    let ans = [];
    for(let i =0; i<=n-k;i++){
        maxi = arr[i];
        for (let j = i+1;j<=i+k-1;j++){
            maxi = Math.max(maxi, arr[j]);
        }
        ans.push(maxi);
    }
    return ans;
}
const arr = [1,3,-1,-3,5,3,6,7];
const k = 3
console.log(slidingwindow(arr,k));