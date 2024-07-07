let Soltuion = function(arr)
{
    let largestElement= arr[0];
    let secondLargest = -1// beacuse all intejars are positive.
    for (let i=1;i<arr.length-1;i++)
        {
            if(arr[i]>arr[i+1])
                {
                    largestElement=arr[i];
                }
        }
    for (let i=0;i<arr.length;i++)
        {
            if (arr[i]>secondLargest && arr[i]<largestElement)
              {
                secondLargest= arr[i];
              }
        }
        return secondLargest;
}
const arr = [1,7,3,4,5,7,7];
const result= Soltuion(arr);
console.log("second largest element is ",result);