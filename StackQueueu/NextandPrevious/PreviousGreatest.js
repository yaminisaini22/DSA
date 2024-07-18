let previousGreater = function(arr){
    let n = arr.length;
    let stack = [];
    let pge = [];
    for (let i =0;i<=n-1;i++){

        while(stack.length>0 && stack[stack.length-1]<= arr[i]){
            stack.pop();
        }
        if (stack.length>0){
            pge[i] = stack[stack.length-1];
        }
        else{
            pge[i] = -1;
        }
        stack.push(arr[i]);
    }
    return pge;

}
const nums = [1, 2, 1];
console.log(previousGreater(nums)); 