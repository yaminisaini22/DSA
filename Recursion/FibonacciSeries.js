
let fibonacciNumber = function(n)
{
    if(n ==0 ){
        return 0;
    }
    if (n ==1){
        return 1;
    }
    return fibonacciNumber(n-1)+fibonacciNumber(n-2);

}
let n = 5;
const fiboNum = fibonacciNumber(n);
console.log("Fibonaci of n number is ", fiboNum)