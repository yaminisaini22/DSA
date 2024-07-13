let MajorityElement = function(arr){
    let n = arr.length;
    const countmap =new Map();
    for(i=0;i<n;i++){
        let num = arr[i];
        if(countmap.has(num)){
            countmap.set(num,countmap.get(num)+1);
        }
        else{
            countmap.set(num,1);
        }
    }
    for(const [num,count] of countmap){
        if(count>Math.floor(n/2)){
            return num;
        }
    }
    return -1;
}
let result = MajorityElement([2,1, 2, 1, 2, 1, 2]);
console.log(result);