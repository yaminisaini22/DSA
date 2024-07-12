let BuyandSell = function(arr){
    let n = arr.length;
    let maxprofit= 0;
    let minvalue = arr[0];
    for (let i =0;i<n;i++){
        minvalue = Math.min(minvalue, arr[i]);
        maxprofit =Math.max(maxprofit, arr[i]-minvalue); 
        }
    return maxprofit;
}
const arr = [7, 1, 5, 3, 6,4];
const result2 = BuyandSell(arr);
console.log("Max profit is :", result2);