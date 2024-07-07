let reverse = function(arr){
    let i =0;
    let j = arr.length-1;
    while(i<j)
        {
            let temp = arr[i];
            arr[i]=arr[j];
            arr[j]= temp;
            i++;
            j--;
        }
        return arr;
}
const arr= [1,2,3,4,5,6,7];
const result = reverse(arr);
console.log("Reverse array is :",result);