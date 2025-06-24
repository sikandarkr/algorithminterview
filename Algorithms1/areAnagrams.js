// function areAnagrams(str1,str2){

//     let data1 = str1.split('').sort().join('');

//     let data2 = str2.split('').sort().join('');

//     if(data1===data2){
//      console.log("these two strings are ananagrams", data1, data2)
//     }
//     else{
//         console.log('These two strings are not ananagrams to each other');
//     }

// }

// areAnagrams("silent","listen");


// 2nd way

function areAnagrams(str1,str2){
    if(str1.length!==str2.length){
        return false;
    }

    let count = {};
    for(let char of str1){

        count[char]  = (count[char]||0)+1;
    }

    for(let char of str2){

        if(!count[char]){
            return false;
        }
        count[char] --;
    }
return true;
}
console.log(areAnagrams("silent","listen"));
console.log(areAnagrams("Hello","World"));