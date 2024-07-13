let sortColors = function(nums) {
    let n = nums.length;
    let low =0;
    let mid =0;
    let high =n-1;
    while(mid<=high){
        if(nums[mid]==0){
            [nums[mid] , nums[low]] =[nums[low], nums[mid]];
            low++;
            mid++;
        }
        else if(nums[mid]==1){
            mid++;  
        }
        else{
            [nums[mid] , nums[high]] =[nums[high], nums[mid]];
            high--;
    }
    }
    return nums;
};
let result = sortColors([1, 0, 1, 2, 1, 2]);
console.log(result);