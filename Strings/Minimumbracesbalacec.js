var minAddToMakeValid = function(s) {
    let opencount = 0;
    let closecount =0;
    for(let i =0;i<s.length;i++){
       let char = s[i];
       if(char === '('){
           opencount++;
       }
       else if(char === ')'){
           if(opencount>0){
               opencount--;
           }
           else{
               closecount++;
           }
       }
    }
    return opencount+closecount;
   
   };
const s = "((("
console.log(minAddToMakeValid(s));