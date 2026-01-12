
let sumOfNnumbers = function(n)
{
    if(n ==1){
        return 1;
    }
    return n + sumOfNnumbers(n-1);

}
let n = 5;
const sum = sumOfNnumbers(n);
console.log("sum of n number is ", sum)

