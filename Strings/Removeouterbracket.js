var removeOuterParentheses = function(s) {
    let depth = 0;
    let result ="";
    for(let i =0;i<s.length;i++){
        let char = s[i];
        if(char === '(')
        {
            if(depth>0){
                result +=char;
            }
            depth++;
        }
        else if(char === ')'){
            depth--;
            if(depth>0){
                result +=char;
            }
        }
    }
    return result;
};
const s = "(()())(())";
console.log(removeOuterParentheses(s));