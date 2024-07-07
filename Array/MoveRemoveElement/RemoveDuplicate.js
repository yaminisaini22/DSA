let RemoveDuplicate = function(arr){
    let i =0;
    for (let j=1;j<arr.length;j++){
        if(arr[i]!==arr[j]){
            i++;
            arr[i]=arr[j];
        }
    }
    return i+1;
}
const arr =[1,1,2,2,3,3,4,4]
const result =RemoveDuplicate(arr);
console.log( "unique elements are:", result);
for (let x=0;x<result;x++)
    {
        console.log(arr[x]);
    }