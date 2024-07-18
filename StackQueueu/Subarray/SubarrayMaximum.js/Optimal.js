const nge = function(arr){
    let n = arr.length;
    let nge = Array(n).fill(n);
    let stack = [];
    for (let i =n-1;i>=0;i--){
        while(stack.length>0 && arr[stack[stack.length-1]]< arr[i]){
            stack.pop();
        }
        if(stack.length>0){
            nge[i] = stack[stack.length-1];
        }
        else{
            nge[i] = n;
        }
        stack.push(i);
    }
    return nge;
}
const pge = function(arr){
    let n = arr.length;
    let pge = Array(n).fill(-1);
    let stack = [];
    for (let i = 0;i< n;i++){
        while(stack.length>0 && arr[stack[stack.length-1]]<= arr[i]){
            stack.pop();
        }
        if(stack.length>0){
            pge[i] = stack[stack.length-1];
        }
        else{
            pge[i] = -1;
        }
        stack.push(i);
    }
    return pge;
}

let subarrayMax = function( nge ,pge, arr)
{
    let n = arr.length;
    let total = 0;
    let mod = 1e9+7;
    for (let i =0;i<n;i++){
        let right = nge[i] - i;
        let left = i-pge[i];
        total = (total+(right*left*arr[i])%mod)%mod;
    }
    return total;
}

let arr = [2, 1, 3];
console.log(subarrayMax(nge(arr), pge(arr), arr));