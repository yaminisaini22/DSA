let subArrayMinSum = function(nse, pse, arr) {
    let n = arr.length;
    let total = 0;
    let mod = 1e9 + 7;

    for (let i = 0; i < n; i++) {
        let left = i - pse[i]; // Number of elements to the left
        let right = nse[i] - i; // Number of elements to the right
        total = (total + (left * right * arr[i]) % mod) % mod; // Sum calculation
    }
    
    return total;
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

const arr = [11, 81, 94, 43, 3];
// Function call to get the required result
console.log(subArrayMinSum(nse(arr), pse(arr), arr)); // Output: 444
