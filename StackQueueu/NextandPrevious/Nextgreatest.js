// Summary Table
// Function	Direction	Purpose
// NGE	Right	Find the next greater element to the right
// NSE	Right	Find the next smaller element to the right
// PGE	Left	Find the previous greater element to the left
// PSE	Left	Find the previous smaller element to the left
var nextGreaterElements = function(nums) {
    let stack = [];
    const nge = new Array(nums.length).fill(-1);
    let n = nums.length;
    for(let i =(2*n)-1;i>=0;i--){
        while(stack.length>0 && stack[stack.length-1]<=nums[i%n])
        {
            stack.pop();
        }
        if(i<n){
            if(stack.length>0){
            nge[i] = stack[stack.length-1];
            }
            else{
            nge[i] = -1;
        }   
        }
        stack.push(nums[i%n]);
    }
    return nge;
};
const nums = [1, 2, 1];
console.log(nextGreaterElements(nums)); 