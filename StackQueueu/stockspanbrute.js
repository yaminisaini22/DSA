let stockspan = function(arr){
    let result = [];
    let n = arr.length;
    let count =1;
    for (let i =n-1;i>=0;i--){
        count = 1;
        for (j= i-1 ;j>=0;j--){
            if (arr[j]<= arr[i]){
                count++;
            }
            else{
                break;
            }
        }
        result[i] = count;
    }
    return result;
}
console.log(stockspan([100, 80, 60, 70, 60, 75, 85]));