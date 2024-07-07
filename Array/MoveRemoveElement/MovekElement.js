let moveElement = function(arr,k){
    let i=0;
    for (let j=0;j<arr.length;j++)
        {
            if (arr[j]!==k)
                {
                    arr[i]=arr[j];
                    i++;
                }
        }
        while (i < arr.length) {
            arr[i] = k;
            i++;
        }
        return arr;
}
const arr =[1,0,0,0,2,4]
k =0;
const result =moveElement(arr, k);
console.log(arr);