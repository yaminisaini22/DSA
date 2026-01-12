let Soltuion = function(arr)
{
    let sortedarr= arr.sort((a,b)=>(a-b));
    console.log(sortedarr);
    let largestElement= sortedarr[sortedarr.length-1];
    console.log(largestElement);
    for (let i=sortedarr.length-2;i>=0;i--)
        {
            if(largestElement>arr[i])
                {
                    largestElement=arr[i];
                    return largestElement;
                }
        }
    }
const arr = [1,7,3,4,5,7,7];
const result= Soltuion(arr);
console.log("second largest element is ",result);