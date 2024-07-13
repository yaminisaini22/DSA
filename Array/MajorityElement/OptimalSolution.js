let MajorityElement = function(arr){
    let n = arr.length;
    let element =0;
    let count =0;
    for(let i=0;i<n;i++){
    if (count === 0)
        {
            count =1;
            element =arr[i];
        }
    else if(element === arr[i])
        {
            count++;
    }
    else{
        count--;
    }
    }
    if (count>Math.floor(n/2)){
        return element;
    }
    count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] === element) {
            count++;
        }
    }

    if (count > Math.floor(n / 2)) {
        return element;
    }
    return -1;
}
let result = MajorityElement([2,1, 2, 1, 2, 1, 2]);
console.log(result);