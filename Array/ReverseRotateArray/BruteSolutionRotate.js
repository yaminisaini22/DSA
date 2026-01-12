let RotateBrutebyK = function(arr, k) {
    let n = arr.length;
    k = k % n; // Adjust k to be within the array length
    let temp = [];

    // Step 1: Store the first k elements in a temporary array
    for (let i = 0; i < k; i++) {
        temp[i] = arr[i];
        console.log("temp variable", temp[i]);
    }

    // Step 2: Shift the remaining elements in the array
    for (let i = k; i < n; i++) {
        arr[i - k] = arr[i];
        console.log("moving variable", arr[i]);
    }

    // Step 3: Copy the elements from the temporary array back to the array
    for (let i = 0; i < k; i++) {
        arr[n - k + i] = temp[i];
        console.log("new array", arr[n - k + i]);
    }

    console.log("new array", arr);
    return arr;
}

const arr2 = [1, 2, 3, 4, 5, 6, 7];
let k = 2;
const result2 = RotateBrutebyK(arr2, k);
console.log("Rotated array is:", result2);
