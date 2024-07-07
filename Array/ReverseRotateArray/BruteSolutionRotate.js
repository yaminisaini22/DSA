// let RotateBrute = function(arr){
//     let temp = arr[0];
//     let n = arr.length;
//     for (let i=0;i<n;i++)
//     {
//         arr[i]=arr[i+1];

//     }
//     arr[n-1]= temp;
//     return arr;
// }
// const arr= [1,2,3,4,5,6,7];
// const result = RotateBrute(arr);
// console.log("Roatated array is :",result);


let RotateBrutebyK = function(arr, k)
{
    
    let temp =[]
    let n = arr.length
    k =k%n;
    for (let i=0;i<k;i++)
        {
            temp[i]=arr[i];
            console.log("temp variable",temp[i]);
        }
    for (let i=k;i<n;i++){
        arr[i-k]=arr[i];
        console.log("moving variable",arr[i]);
    }
    for (let i=0;i<k;i++){
        arr[i+k+1]= temp[i];
        console.log("new array",arr[i]);
    }
 console.log("new array",arr);
 return arr;
}
const arr2= [1,2,3,4,5,6,7];
let k =2;
const result2 = RotateBrutebyK (arr2,2);
console.log("Roatated array is :",result2);