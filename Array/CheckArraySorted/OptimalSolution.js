let sorted = function(arr) {
    for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i+1]) {
                return false;
            }
        }
    return true;
}

const arr = [1, 2, 3, 4, 5];
const result = sorted(arr);
console.log(result); // Output: false
