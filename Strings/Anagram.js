let anagram = function(s,t){
    if(s.length !== t.length){
        return false;
    }
    let count = Array(26).fill(0);
    let acharcode = 'a'.charCodeAt(0) //cpnvert into ASCII

    for(let i =0;i<s.length;i++){
        count[s[i].charCodeAt(0)-acharcode(0)]++;
        count[t[i].charCodeAt(0)-acharcode(0)]--;
    }
    for(i =0;i<count.length;i++){
        if(count!== 0){
            return false;
        }
    }
    return true;
}
console.log(anagram("anagram", "nagaram")); // Output: true
console.log(anagram("rat", "car")); 