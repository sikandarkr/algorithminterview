function countVowelsAndConsonants(str){

    const vowels = ["A","E", "I", "O", "U", "a", "e", "i", "o","u"];
    let v =0;
    let c =0;

    for(let i=0; i<str.length; i++){
      let char = str[i];
      let isVowel = false;
        if(char>='a' && char<='z' || char>='A' && char<='Z'){
           
            for(let j=0; j<vowels.length; j++){
                if(char==vowels[j]){
                    isVowel = true;
                    break;
                }

            }
        }
        if(isVowel) v++;
        else c++
    }
    return { vowels: v, consonants: c };

}

console.log(countVowelsAndConsonants("hello"));