var maxDepth = function(s) {
    let currentdepth = 0;
    let maxdepth = 0;
    for(let i =0;i<s.length;i++){
        let char =s[i];
        if(char === '('){
            currentdepth++;
            if(currentdepth>maxdepth){
                maxdepth = currentdepth;
            }
        }
        else if(char === ')'){
            currentdepth--;
        }
    }
    return maxdepth;
};
const s = "(1+(2*3)+((8)/4))+1";
console.log(maxDepth(s));