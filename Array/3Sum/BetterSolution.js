let threeSum = function(arr){
    let n = arr.length;
    let ans = [];
    let set = new Set();
    for (i=0;i<n;i++){
        let hashset = new Set();
        for (j=i+1;j<n;j++){
         let third = -(arr[i]+arr[j]);
         if (hashset.has(third)){
            let temp = [arr[i],arr[j],third];
            temp.sort((a,b)=>(a-b));
            ans.push(temp);
         }
         hashset.add(arr[j]);
        }
    }
    set = new Set(ans.map(JSON.stringify));
    ans = Array.from(set).map(JSON.parse);
    return ans;
}

let result = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(result);