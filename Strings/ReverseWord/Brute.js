let revereseword = function(sentence){
    let str = "";
    let stack = [];
    let s = sentence + ' '
    for (let i = 0;i<s.length;i++){
        let ch = s.charAt(i);
        if(ch === ' '){
            stack.push(str);
            str = "";
        }
        else if (ch !== ' '){
            str+= ch;
        }
    }
    let ans = "";
    while(stack.length> 1){
        ans += stack.pop() + ' ';
    }
    ans+= stack.pop(); // last word should not have space.
    return ans;
}
const sentence = "TUF is great for interview preparation";
console.log(revereseword(sentence));