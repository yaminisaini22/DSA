let lpsfind = function(s){
    let pre = 0;
    let suff =1;
    let lps = Array(s.length).fill(0);

    while(suff<s.length){
        //match
        if( s[pre] == s[suff]){
            lps[suff] = pre+1;
            pre++;
            suff++;
        }
        else{//unmatch
            if(pre ==0){
                lps[suff] = 0;
                suff++;
            }
            else { // unmatched
               pre = lps[pre-1];
            }
        }
    }
    return lps;
}
let twostringmatch = function(haystack, needle){
first = 0;
second= 0;
const lps = lpsfind(needle);
while(first<haystack.length && second<needle.length)
    {
      if(haystack[first] == needle[second]){ //match
        first++;
        second++;
      }
      else{
        if(second == 0){
            first++;
        }
        else{
            second = lps[second-1];
        }
      }
    }
    if(second == needle.length){
        return first - second;
    }
    else{
        return -1;
    }
}
const haystack ="sadbutsad";
const needle ="sad";
console.log(twostringmatch(haystack, needle));
