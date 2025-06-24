function reverseWords(str){

    let currentWord = "";
    let reversedWord = "";
    
    for(let i=str.length-1; i>=0; i--){
        let char = str[i];
        if(char===" "){
           reversedWord = reversedWord + currentWord+" ";
           currentWord = "";
    
        }
        else{
            currentWord = char+currentWord;
        }
    }
    if(currentWord !==""){
        reversedWord +=currentWord;
    }
  return reversedWord;
}




console.log(reverseWords("I Love Javascript"));