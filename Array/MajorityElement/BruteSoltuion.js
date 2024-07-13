let MajorityElement = function(arr){
    let n = arr.length;
    for(let i=0;i<n;i++){
        let count =0;
        for (let j =0;j<n;j++){
            if(arr[i]==arr[j]){
                count++;
            }
        }
        if(count>Math.floor(n/2)){
            return arr[i];
        }
    }
    return -1;
}
let result = MajorityElement([2,1, 1, 1, 2, 1, 2]);
console.log(result);