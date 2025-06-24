function RemoveDuplicateArray(arr){

    let newArr =[];

    for(let i=0; i<arr.length;i++){

        if(!newArr.includes(arr[i])){
           newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(RemoveDuplicateArray([1,2,5,7,5,9,8,6,3,8]));