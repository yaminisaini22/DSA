let romanToInt = function(s){
 const romanintmap ={
I :  1,
V :  5,
X :  10,
L :  50,
C :  100,
D :  500,
M :  1000
 }  //IV
let add =0;
 for (let i =0;i<s.length;i++){
    if(romanintmap[s[i]]<romanintmap[s[i+1]]){
         add -= romanintmap[s[i]];
    }
    else{
        add += romanintmap[s[i]];
    }
 }
 return add;
}
console.log(romanToInt("III"));   // Output: 3
console.log(romanToInt("IV"));    // Output: 4
console.log(romanToInt("IX"));    // Output: 9
console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("MCMXCIV"));