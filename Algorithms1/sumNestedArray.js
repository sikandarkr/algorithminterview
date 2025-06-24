function sumNestedArray(arr){

    return arr.flat(Infinity).reduce((acc, n)=>{
       return acc+n;
    }, 0);

}
console.log(sumNestedArray([1, [2, [3, 4]]]))