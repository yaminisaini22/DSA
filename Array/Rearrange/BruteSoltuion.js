// only when n/2 is there meaning equal negative and positive.
let ArrayRearrange = function(arr){
    let n = arr.length;
    let pos= [];
    let neg = [];
    for (let i=0;i<n;i++){
        if(arr[i]<0){
            neg.push(arr[i]);
        }
        else{
            pos.push(arr[i]);
        }
    }
    for (let i =0;i<n/2;i++){
        arr[2*i] = pos[i];
        arr[(2*i)+1] = neg[i];
    }
    return arr;
}
let result = ArrayRearrange([-2,1, -3, 1, -4, 2]);
console.log(result);