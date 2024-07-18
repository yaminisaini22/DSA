var largestRectangleArea = function(heights) {
    let n = heights.length;
    let stack = [];
    let ans = 0;

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
            let element = stack.pop();
            let nse = i;
            let pse = stack.length > 0 ? stack[stack.length - 1] : -1;
            ans = Math.max(ans, heights[element] * (nse - pse - 1));
        }
        stack.push(i);
    }

    while (stack.length > 0) {
        let element = stack.pop();
        let nse = n;
        let pse = stack.length > 0 ? stack[stack.length - 1] : -1;
        ans = Math.max(ans, heights[element] * (nse - pse - 1));
    }

    return ans;
};
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); 