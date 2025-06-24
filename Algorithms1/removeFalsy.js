function removeFalsy(arr){

    return arr.filter(Boolean);
}

console.log(removeFalsy([0, "", false, 1, "hello", null])); 