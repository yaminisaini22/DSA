let subArrayMinSum = function(arr){
    let n = arr.length;
    let total = 0;
    for (let i=0;i<n;i++){
     let min = arr[i];
     for (let j =i;j<n;j++){
        min = Math.min(min , arr[j])
        total = total+min;
     }
    }
    return total;
}
const arr = [11, 81, 94, 43, 3];
console.log(subArrayMinSum(arr)); 