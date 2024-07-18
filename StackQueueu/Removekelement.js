let removeKElement = function(arr, k){
    let n = arr.length;
    let stack = [];
    let result = '';
    if (k === arr.length)
        {
            return '0';
        }
    if (k === 0){
        return arr;
    }
    for (let i =0;i<n;i++){
        while(k>0&& arr[i]<stack[stack.length-1]&&stack.length>0){
            k--;
            stack.pop();

        }
        stack.push(arr[i]);
        }
        while (k>0){
            k--;
            stack.pop();

        }
        let j =0;
        while(stack[j] === '0')
            {
                stack[j] = '';
                j++;
            }
        result = stack.join('') || '0';
        return result;
    }

let arr = "1432219";
let k = 3;
    
let smallestNum = removeKElement(arr, k);
console.log(`Smallest number after removing ${k} digits: ${smallestNum}`); // Output: "1219"
