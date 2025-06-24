function isSorted(arr){
    for(let i=0; i<arr.length; i++){
               if(arr[i]<arr[i-1]) return false;
            
    }
    return true;

}
console.log(isSorted([1, 2, 3, 4]));

console.log(isSorted([1, 2, 4, 3]));
