function capitalizeWords(str){

    let newStr = "";

    for(let i=0; i<str.length; i++){
        if(i===0 ||   str[i-1]===" "){
            newStr += str[i].toUpperCase();
        }
        else{
            newStr += str[i];
        }
          
         
      
    }
    return newStr;
}
console.log(capitalizeWords("hi i am sikandar"));