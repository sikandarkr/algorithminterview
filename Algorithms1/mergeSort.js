function mergeSort(arr){

    if(arr.length<=1) return arr;

    let mid = (arr.length/2)|0;

    let left =[];

    let right = [];

    for(let i =0; i<arr.length; i++){
        
        if(i<mid) left[left.length] =arr[i]
        else right[right.length] = arr[i];
    }
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right){

    let sorted = [];

    let i=0, j=0, k=0;

    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
           sorted[k++] = left[i++];

        }
        else{
            sorted[k++] = right[j++]
        }
    }

    while(i<left.length){
      sorted[k++] = left[i++];
    }
    while(j<right.length){
       sorted[k++] = right[j++];
    }
    return sorted;

}

console.log(mergeSort([4, 1, 7, 2, 9]));