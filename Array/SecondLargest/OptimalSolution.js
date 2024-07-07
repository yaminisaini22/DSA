class Solution {
    // Function returns the second largest element
    print2largest(arr) {
        let largestElement = arr[0];
        let slargestElement = -1;
        for (let i=1;i<arr.length;i++){
            if (arr[i]>largestElement){
                slargestElement = largestElement;
                largestElement = arr[i];
            }
            else if (arr[i]>slargestElement && arr[i]<largestElement){
                slargestElement = arr[i];
            }
            
        }
    return slargestElement; // Code Here
    }

}
const arr =[2,4,5,6,7,9];
let solution = new Solution;
const result = solution.print2largest(arr);
console.log("Second largest element is :",result);