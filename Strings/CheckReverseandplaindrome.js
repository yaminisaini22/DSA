let reversePalindrome = function(s){
    let n = s.length;
    let start = 0;
    let end = n-1;
    let reverse = '';
    for (let i =s.length-1;i>= 0;i--){
        reverse+= s[i];
    }
    let isplaindrom = (reverse === s);
    return{
        isplaindrom: isplaindrom,
        reverse: reverse
    }
}
console.log(reversePalindrome("racecar")); // Output: { reverse: 'racecar', isPalindrome: true }
console.log(reversePalindrome("hello")); 