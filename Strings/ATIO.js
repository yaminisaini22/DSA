var myAtoi = function(s) {
    if(s.length< 1 ) return "";
    s = s.trim();
    console.log(s);
    let index = 0;
    let ans = 0;
    let isnegative = false;
    const INT_MIN = -(2**31);
    const INT_MAX = 2**31 - 1;


    if(s[0] === '-'|| s[0] === '+'){
        if(s[0] == '-'){
            isnegative = true;
        }
        index++;
    }
    for(let i =index;i<s.length;i++){
        let ch = s[i]
        if( ch<'0' || ch>'9'){
            break;
        }
        let value = ch.charCodeAt(0) - '0'.charCodeAt(0);
        ans = ans*10+value;
    }
    if (isnegative){
        ans = -(ans);
    }
    if(ans<INT_MIN){
        return INT_MIN;
    }
    else if(ans>INT_MAX){
        return INT_MAX;
    }

    return ans;
};
console.log(atio("    1234abc"));