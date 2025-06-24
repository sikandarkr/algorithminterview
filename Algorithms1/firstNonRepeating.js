function firstNonRepeating(str){


    for(let char of str){
        console.log(str.indexOf(char),str.lastIndexOf(char) );
        if (str.indexOf(char) === str.lastIndexOf(char)) {
           return char;
        }
        
    }
    return "There is no non-repeating character here";
}

console.log(firstNonRepeating("aabbcddena"));
