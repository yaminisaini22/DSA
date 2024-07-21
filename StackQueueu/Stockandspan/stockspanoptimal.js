let stackspan = function(price) {
    let n = price.length;
    let stack = [];
    let ans = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && price[i] >= price[stack[stack.length - 1]]) {
            stack.pop();
        }
        if (stack.length === 0) {
            ans[i] = i + 1;
        } else {
            ans[i] = i - stack[stack.length - 1];
        }
        stack.push(i);
    }

    return ans;
}

console.log(stackspan([100, 80, 60, 70, 60, 75, 85])); // Expected Output: [1, 1, 1, 2, 1, 4, 6]
