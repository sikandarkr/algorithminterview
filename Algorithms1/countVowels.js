function countVowels(str){

    const vowels =['a','e','i','o','u'];
    let countVowels = 0;

    for(let i=0; i<str.length; i++){

        if(vowels.includes(str[i].toLowerCase())){
            countVowels +=1;
        }
    }
    return countVowels;
}

console.log(countVowels("abinoaubvU"));