let subarraysumrange = function(arr){
    let n = arr.length;
    let largest = 0;
    let smallest = 0;
    let total = 0;
    for (let i=0;i<n;i++){
        largest = arr[i] ;
        smallest = arr[i]
        for (j =i; j<n;j++){
            largest = Math.max(largest, arr[j])
            smallest = Math.min(smallest , arr[j])
            total+= largest - smallest;
        }
    }
    return total;
}
const arr = [1, 2, 3];
console.log(subarraysumrange(arr));