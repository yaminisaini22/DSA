let sorting = function(arr){
    let n = arr.length;
    let countzero = 0;
    let countone = 0;
    let counttwo = 0;
    for (let i =0; i<n ;i++){
        if (arr[i] == 0) countzero++;
        else if (arr[i] == 1) countone++;
        else counttwo++;
    }
    for (let i =0; i<countzero; i++){
        arr[i]= 0;
    }
    for (let i= countzero; i<countzero+countone;i++){
        arr[i]= 1;
    }
    for (let i =countone ;i<n ;i++){
        arr[i]=2;
    }
    return arr;
}
let result = sorting([1, 0, 1, 2, 1, 2]);
console.log(result);