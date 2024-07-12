let TwoSum = function(arr, target) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let sum = arr[i] + arr[j];
            if (sum === target) {
                return {
                    ans: "yes",
                    index1: i,
                    index2: j
                };
            }
        }
    }
    return {
        ans: "NO",
        index1: -1,
        index2: -1
    };
};

const arr = [2, 6, 5, 8, 11];
let k = 14;
const result2 = TwoSum(arr, k);
console.log("Does this array contain:", result2.ans, result2.index1, result2.index2);
