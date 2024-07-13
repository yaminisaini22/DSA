let threeSum = function(arr){
    let n = arr.length;
    let ans = []
    let set = new Set();
    for (let i =0;i<n;i++){
        for (let j =i+1;j<n;j++){
            for (let k=j+1;k<n;k++){
                if(arr[i]+arr[j]+arr[k]===0)
                    {
                      let temp = [arr[i],arr[j],arr[k]];
                      temp.sort((a,b)=>(a-b));
                      ans.push(temp);
                    }
        
            }
        }
    }
    //convert the array into set to only store unique elements
    set = new Set(ans.map(JSON.stringify));
    ans = Array.from(set).map(JSON.parse);
    return ans;
}

let result = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(result);