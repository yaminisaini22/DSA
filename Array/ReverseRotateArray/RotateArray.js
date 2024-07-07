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
let rotateAntiClockRight = function(arr, k)
{
    reverse(arr,0,arr.length-1);
    reverse(arr,0,k-1);
    reverse(arr,k,arr.length-1);
    return arr;
}
let rotateClockleft = function(arr, k)
{
    reverse(arr,0,k-1);
    reverse(arr,k,arr.length-1);
    reverse(arr,0,arr.length-1);

    return arr;
}
const arr1= [1,2,3,4,5,6];
const arr2 = [1, 2, 3, 4, 5, 6];
let k =2;
const result = rotateAntiClockRight(arr1 , k);
const result2 = rotateClockleft(arr2 , k);
console.log("Anti clockwise Rotated array to the right by",k,"value is :",result);
console.log("Clockwise Rotated array to the left by",k,"value is :",result2);