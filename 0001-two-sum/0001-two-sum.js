//paste krio yaha
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Step 1: Create a hashmap to store the value and its index
    const map = new Map();
//helloooooo
    //Step 2: Iterate through the array
    for(let i = 0; i < nums.length; i++){
        // Step 3: Calculate the complement of the current element
        const complement = target - nums[i];
        // Step 4: Check if the complement exists in the map
        if(map.has(complement)){
            // If it exists, return the indices
            return [map.get(complement), i]
        }

        // Step 5: If it doesn't exist, add the current element to the map
        map.set(nums[i], i);
    }

    // Step 6: If no solution is found, return an empty array (this line is usally never reached because the problem guarantees on solutions)
    return [];
};