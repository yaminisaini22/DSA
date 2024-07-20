let longestpalindrome = function(s){
    if (s.length<1) return "";
    let longestsubstring = s.substring(0,1);
    let n = s.length;
    for(let i =0;i<n;i++){
        let odd = expandaroundcenter(s,i,i);
        let even = expandaroundcenter(s,i,i+1);

        if (odd.length> longestsubstring.length){
            longestsubstring = odd;
        }
        if(even.length>longestsubstring.length){
            longestsubstring = even;
        }

    }
    return longestsubstring;
}
let expandaroundcenter= function(s,left,right){
while(left>=0 && right<s.length && s[left]===s[right]){
    left--;
    right++;
}
return s.substring(left+1,right);
}
const input = "babad";
console.log(longestpalindrome(input)); 