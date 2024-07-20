
let countpalindromic = function(s){
    let count =0;
    let expandaroundcenter= function(left,right){
        while(left>=0 && right<s.length && s[right]===s[left]){
            right++;
            left--;
            count++;
        }
    }
    for(let i=0;i<s.length;i++){
        expandaroundcenter(i,i);
        expandaroundcenter(i,i+1);
    }
    return count;
}

console.log(countpalindromic("bccb")); // Output: 6
console.log(countpalindromic("aab"));