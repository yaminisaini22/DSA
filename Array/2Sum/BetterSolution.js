let TwoSum = function(arr, target){
    let n = arr.length;
    let remmap = new Map();
    for(let i =0;i<n;i++){
      num = arr[i];
      rem = target-num;
      if(remmap.has(rem)){
        return {ans :"Yes",
            index1: remmap.get(rem) ,
            index2: i,}
      }
      remmap.set(num , i);
    }
    return "no";
}
const arr = [2, 6, 5, 8, 11];
let k = 14;
const result2 = TwoSum(arr, k);
console.log("Does this array contain:", result2.ans, result2.index1, result2.index2);