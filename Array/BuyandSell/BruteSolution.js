let BuyandSell = function(arr){
    let n = arr.length;
    let maxprofit= 0;
    for (let i =0;i<n;i++){
        for (let j =i+1;j<n;j++){
            if (arr[j]>arr[i])
                {
                    maxprofit =Math.max(maxprofit, arr[j]-arr[i]); 
                }
        }
    }
    return maxprofit;
}
const arr = [7, 1, 5, 3, 6,4];
const result2 = BuyandSell(arr);
console.log("Max profit is :", result2);