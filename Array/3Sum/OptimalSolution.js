let threeSum = function(arr){
    let n = arr.length;
    let ans =[];
    arr.sort((a ,b)=>a-b);
    for (i=0;i<n;i++){
        if (i!=0 && arr[i]==arr[i-1]) continue;
         let j =i+1;
         let k =n-1;
         
         while(j<k)
            {
                let sum = arr[i]+arr[j]+arr[k];
                if (sum >0){
                    k--;
                }
                else if(sum<0){
                    j++;
                }
                else{
                    let temp = [arr[i], arr[j],arr[k]];
                    ans.push(temp);
                    j++;
                    k--;
                    while(j<k && arr[j]==arr[j-1]) j++;
                    while(j<k && arr[k]==arr[k+1]) k--;
                }
            }
    }
    return ans;
}
let result = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(result);