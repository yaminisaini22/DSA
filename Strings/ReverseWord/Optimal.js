let reverseWord = function(sentence){
    let temp ="";
    let ans ="";
    for (let i =0;i<sentence.length;i++){
        let ch = sentence.charAt(i);
        if (ch !== ' ')
            {
                temp += ch;
            }
        else if(ch === ' '){
            if(ans !== ""){
                ans = temp + ' '+ ans
            }
            else{
                ans = temp;
            }
            temp = "";
        }

    }
    if (temp !== "") // if temp is not empty! then add last word.
        { if (ans !== ""){
            ans = temp + ' '+ ans
        }
        else{
            ans = temp;
        }

    }
    return ans;
}
const sentence = "TUF is great for interview preparation";
console.log(reverseWord(sentence));