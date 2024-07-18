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
const arr = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trappinrainwater(arr));