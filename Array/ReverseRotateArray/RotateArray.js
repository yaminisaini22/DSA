let reverse = function( arr,i ,j){

    while(i<j)
        {
            let temp = arr[i];
            arr[i]=arr[j];
            arr[j]= temp;
            i++;
            j--;
        }
}
let rotateClockRight = function(arr, k)
{
    k = k%arr.length;
    reverse(arr,0,arr.length-1);
    reverse(arr,0,k-1);
    reverse(arr,k,arr.length-1);
    return arr;
}
let rotateAntiClockleft = function(arr, k)
{
    k = k%arr.length;
    reverse(arr,0,k-1);
    reverse(arr,k,arr.length-1);
    reverse(arr,0,arr.length-1);

    return arr;
}
const arr1= [1,2,3,4,5,6];
const arr2 = [1, 2, 3, 4, 5, 6];
let k =2;
const result = rotateClockRight(arr1 , k);
const result2 = rotateAntiClockleft(arr2 , k);
console.log("clockwise Rotated array to the right  by",k,"value is :",result);
console.log(" Anti Clockwise Rotated array to the left by",k,"value is :",result2);