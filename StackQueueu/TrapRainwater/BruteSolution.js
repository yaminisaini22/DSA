let trappinrainwater = function(arr){
    let n = arr.length;
    let rightmax = [];
    let leftmax = [];
    rightmax[0] = arr[0];
    leftmax[n-1] = arr[n-1];
    for (let i= 1; i<n; i++){
        rightmax[i] = Math.max(rightmax[i-1], arr[i]);
    }
    for (let i = n-2 ; i>= 0;i--){
        leftmax[i] = Math.max(leftmax[i+1], arr[i]);
     }
    let res = 0;
    for (i =0 ;i<n;i++){
        let waterlevel = Math.min(rightmax[i] , leftmax[i]);
        let trapwater = waterlevel - arr[i];
        res = res +trapwater;
    }
    return res;
}
const arr = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trappinrainwater(arr));