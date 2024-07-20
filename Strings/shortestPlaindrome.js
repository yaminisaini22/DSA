let lpsfind = function(s){
    let pre =0;
    let suff=1;
    let lps = Array(s.length).fill(0);

    while(suff<s.length){
        if(s[pre]==s[suff])//match
        {
            lps[suff] = pre+1;
            pre++;
            suff++

        }
        //unmatch
        else{
            if(pre == 0){
                lps[suff] =0;
                suff++;
            }
            else{
                pre = lps[pre-1];
            }
        }
    }
    return lps[s.length-1];
}
let reveresestring = function(s){
    let reverse = ""
    for(let i=s.length-1;i>=0;i--){
        reverse += s[i] 
    }
    return reverse;
}
let minimumForPalindrome = function(s){

    let concat = "";
    let reverse = reveresestring(s);
    concat = s +"@"+reverse;
    let chartoadd = s.length - lpsfind(concat);
    let palindrome = reverse.substring(0,chartoadd)+s;

    return {
        chartoadd:chartoadd,
        palindrome:palindrome
    }
}
console.log(minimumForPalindrome("abcd")); 