let ArrayRearrange = function(arr){
    let n = arr.length;
    let pos =0;
    let neg = 1;
    let ans = []
    for (let i =0;i<n;i++){
        if (arr[i]<0){
            ans[neg] = arr[i];
            neg += 2;
        }
        else {
            ans[pos] = arr[i];
            pos += 2;
        }
    }
    return ans;
}
let result = ArrayRearrange([-2,1, -3, 1, -4, 2]);
console.log(result);
