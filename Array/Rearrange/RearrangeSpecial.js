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
    if (pos.length>neg.length){
        for(let i=0;i<neg.length;i++){
        arr[2*i] = pos[i];
        arr[(2*i)+1] = neg[i];
        }
        let index = neg.length*2;
        for(let i =neg.length;i<pos.length;i++){
            arr[index] = pos[i];
            index++;
        }
    }
    else {
        for(let i=0;i<pos.length;i++){
            arr[2*i] = pos[i];
            arr[(2*i)+1] = neg[i];
            }
            let index = pos.length*2;
            for(let i =pos.length;i<neg.length;i++){
                arr[index] = neg[i];
                index++;
            }
    }
    return arr;
}
let result = ArrayRearrange([-2, 1, -3, 1, -4, 2, -1]);
console.log(result);