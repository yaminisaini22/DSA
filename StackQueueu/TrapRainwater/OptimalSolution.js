let trappinrainwater = function(arr){
    let n = arr.length;
    let l = 0;
    let r = n-1;
    let lhb = arr[0];
    let rhb = arr[n-1];
    let res = 0;
    while(l<= r){
        if (lhb<= rhb){
            if(arr[l]>= lhb){
                lhb = arr[l];
            }
            else{
                res = res + lhb - arr[l];
            }
            l++;
        }
        else{
            if(arr[r]>= rhb){
                rhb = arr[r] ;
            }
            else{
                res = res + rhb- arr[r]
            }
            r--;
        }
    }
    return res;
}
const arr = [1,8,6,2,5,4,8,3,7];
console.log(trappinrainwater(arr));