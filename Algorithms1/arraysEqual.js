function arraysEqual(arr,brr){

    if(arr.length!==brr.length) return false;

    return arr.every((val,index)=>val===brr[index]);

}

console.log(arraysEqual([1, 2, 3], [1, 2, 3]));