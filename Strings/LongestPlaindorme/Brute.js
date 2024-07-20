let isplaindrome = function(s){
    let left = 0;
    let right = s.length-1;
    while(left<right){
        if (s[left] !== s[right])
        {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
let longestpalindrome= function(s){
    let n = s.length;
    let maxlength = 0;
    let longest ="";
    for(let i =0;i<n;i++){
        for(let j=i+1;j<n;j++){
            let substring = s.substring(i,j)
            if(isplaindrome(substring)&& substring.length>maxlength){
                maxlength = substring.length;
                longest = substring;
            }
        }
    }
    return {
        longest: longest,
        maxlength: maxlength
}
}
const input = "babad";
console.log(longestpalindrome(input)); 