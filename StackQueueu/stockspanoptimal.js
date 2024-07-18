let stackspan = function(price){
    let n = price.length;
    let stack = [];
    let ans = new Array(n).fill(0);
    for(let i =n-1;i>=0;i--){
        while(stack.length>0&& price[i]> price[stack[stack.length-1]]){
            ans[stack[stack.length-1]] = stack[stack.length-1] - i;
            stack.pop();
        }
        stack.push(i);
    }
        while(stack.length !== 0){
            ans[stack[stack.length-1]] = stack[stack.length-1]+1;
            stack.pop();
        }
    return ans;

}
console.log(stackspan([100, 80, 60, 70, 60, 75, 85]));