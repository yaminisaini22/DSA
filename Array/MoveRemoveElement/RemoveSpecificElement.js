let RemoveDuplicate = function(arr,k){
    let i =0;
    for (let j=0;j<arr.length;j++){
        if(arr[j]!==k){
            arr[i]=arr[j];
            i++;
        }
    }
    return i;
}
const arr =[1,0,2,8,2,4]
k =2;
const result =RemoveDuplicate(arr, k);
console.log( "unique elements are:", result,"after removing",k);
for (let x=0;x<result;x++)
    {
        console.log(arr[x]);
    }