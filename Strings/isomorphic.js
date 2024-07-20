var isIsomorphic = function(s, t) {
    let MapStoT = new Map();
    let MapTToS = new Map();
    if(s.length !== t.length){
        return false;
    }
    for(let i =0;i<s.length;i++){
        CharS = s[i];
        CharT = t[i];

        if(MapStoT.has(CharS)){
            if( MapStoT.get(CharS)!== CharT){
                return false;
            }
        }
        else{
            MapStoT.set(CharS, CharT);
        }

        if(MapTToS.has(CharT)){
            if( MapTToS.get(CharT)!== CharS){
                return false;
            }
        }
        else{
            MapTToS.set(CharT, CharS);
        }
    }
    return true;
};
console.log(isIsomorphic("egg", "add")); // Output: true
console.log(isIsomorphic("foo", "bar")); 