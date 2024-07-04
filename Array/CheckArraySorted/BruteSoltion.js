let sorted = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                return false;
            }
        }
    }
    return true;
}

const arr = [1, 2, 3, 4, 5];
const result = sorted(arr);
console.log(result); // Output: false
