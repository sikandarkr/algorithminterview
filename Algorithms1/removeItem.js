function removeItem(arr, n){

    return arr.filter((item)=>item!==n)
}

console.log(removeItem([1, 2, 3, 2], 2));