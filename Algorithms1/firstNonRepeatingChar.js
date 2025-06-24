function firstNonRepeatingChar(str){

    let result = "";
    let obj ={};

    for(let i=0; i<str.length; i++){
        if(obj[str[i]]){
            obj[str[i]] += 1;
        }
        else{
            obj[str[i]] = 1;
        }
      
    }

    for(let char in obj){

        if(obj[char]==1){
            return char;
        }
    }

    
}

console.log(firstNonRepeatingChar("aabbcdden"));