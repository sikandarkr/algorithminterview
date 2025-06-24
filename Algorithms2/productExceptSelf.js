// function productExceptSelf(arr) {

//     let arrLength = arr.length;

//     const output = new Array(arrLength).fill(1);
//     let prefix =1;
//     let suffix =1;
//     for (let i = 0; i < arrLength; i++) {
//       output[i] = prefix;
//       prefix *= arr[i];
//     }

//     suffix = 1;

//     for(let i=arrLength-1; i>=0; i--){

//         output[i] *= suffix;

//         suffix *= arr[i];
//     }

//     return output;

// }

// console.log(productExceptSelf([1, 2, 3, 4]));



function productExceptSelf(arr) {

    let arrLength = arr.length;

    const output = new Array(arrLength).fill(1);
    let prefix =1;
    let suffix =1;
    for (let i = 0; i < arrLength; i++) {
      output[i] = prefix;
      console.log(prefix);
      prefix *= arr[i];
    }

    suffix = 1;

    for(let i=arrLength-1; i>=0; i--){

        output[i] *= suffix;

        suffix *= arr[i];
    }

    return output;

}

console.log(productExceptSelf([1, 2, 3, 4]));