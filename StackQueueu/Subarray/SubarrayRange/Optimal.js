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



const nse = function(arr) {
    let n = arr.length;
    let stack = [];
    let nse = Array(n).fill(n); // Initialize to n for right boundary

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
            stack.pop();
        }
        if (stack.length > 0) {
            nse[i] = stack[stack.length - 1];
        }
        stack.push(i); // Push index, not value
    }
    
    return nse;
}

const pse = function(arr) {
    let n = arr.length;
    let stack = [];
    let pse = Array(n).fill(-1); // Initialize to -1 for left boundary

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }
        if (stack.length > 0) {
            pse[i] = stack[stack.length - 1];
        }
        stack.push(i); // Push index, not value
    }
    
    return pse;
}



let subarrayMax = function(arr)
{
    let n = arr.length;
    let total = 0;
    let mod = 1e9+7;
    let ngee = nge(arr);
    let pgee = pge(arr);
    for (let i =0;i<n;i++){
        let right = ngee[i] - i;
        let left = i-pgee[i];
        total = (total+(right*left*arr[i])%mod)%mod;
    }
    return total;
}

let subArrayMinSum = function(arr) {
    let n = arr.length;
    let total = 0;
    let mod = 1e9 + 7;
    let nsee = nse(arr);
    let psee = pse(arr);
    for (let i = 0; i < n; i++) {
        let left = i - psee[i]; // Number of elements to the left
        let right = nsee[i] - i; // Number of elements to the right
        total = (total + (left * right * arr[i]) % mod) % mod; // Sum calculation
    }
    
    return total;
}

let range = function(arr){
     return subarrayMax(arr) - subArrayMinSum(arr);
}
const arr = [1,2,3];
console.log(range(arr));
