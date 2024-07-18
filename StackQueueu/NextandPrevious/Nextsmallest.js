 let nextSmallestElement = function(A){
       let stack = [];
       const nse = new Array(A.length).fill(-1);
       let n = A.length;
       for(let i = (2*n)-1;i>=0;i--){
           while(stack.length>0 && stack[stack.length-1]>=A[i])
           {
               stack.pop();
           }
           if(i<n){
               if(stack.length>0){
               nse[i] = stack[stack.length-1];
               }
               else{
               nse[i] = -1;
           }   
           }
           stack.push(A[i]);
       }
       return nse;
    }
   const nums = [1, 2, 1];
   console.log(nextSmallestElement(nums));    