let longestprefixsuffix = function(s){ // also called longest happy prefix.
    let pre = 0;
    let suff =1;
    let lps = Array(s.length).fill(0);

    while(suff<s.length){
        //match
        if(s[pre] == s[suff]){
            lps[suff] = pre+1;
            pre++;
            suff++;
        }
        else{//unmatch
          if(pre ==0){
            lps[suff] = 0;
            suff++
          }
          else{
            pre = lps[pre-1];
          }
        }
    }
    return lps[s.length-1];
}

let lpsfind = function(s){
    let pre = 0;
    let suff =1;
    let lps = Array(s.length).fill(0);

    while(suff<s.length){ //match

        if(s[pre]==s[suff]){
            lps[suff] = pre+1;
            pre++;
            suff++
        }
        else { //unmatch
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
var longestPrefix = function(s) {
    let longestprefix = lpsfind(s);
    return longestprefix>0 ? s.substring(0,longestprefix) :"";
};
const s ="aaaa";
console.log(longestprefixsuffix(s));
console.log(longestPrefix(s))

// for longest happy suffix we will first reveser the string.
//then find lps and return