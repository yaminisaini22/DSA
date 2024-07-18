const pse = function(arr){
    let n = arr.length;
    let stack = []
    let pse = Array(n).fill(-1)
    for (let i =0;i<n;i++){
        while(stack.length>0 && arr[stack[stack.length-1]]>= arr[i]){
            stack.pop();
        }
        if(stack.length>0){
            pse[i] = stack[stack.length-1];
        }
        else{
            pse[i] = -1;
        }
        stack.push(i);
    }
    return pse;
}
const nse = function(arr){
    let n = arr.length;
    let stack = []
    let nse = Array(n).fill(n)
    for (let i =n-1;i>=0;i--){
        while(stack.length>0 && arr[stack[stack.length-1]]>= arr[i]){
            stack.pop();
        }
        if(stack.length>0){
            nse[i] = stack[stack.length-1];
        }
        else{
            nse[i] = n;
        }
        stack.push(i);
    }
    return nse;
}
let largestRectangleArea = function(arr){
    let nsee = nse(arr);
    let psee = pse(arr);
    let n = arr.length;
    let ans = 0;
    for (let i =0;i<n;i++){
        ans = Math.max(ans, arr[i]*(nsee[i]-psee[i]-1));
    }
    return ans;
}
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); 