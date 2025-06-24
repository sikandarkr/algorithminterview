function mergeSorted(arr, brr) {
    let result = [];
    let i = 0, j = 0;
    while (i < arr.length && j < brr.length) {

        if (arr[i] < brr[j]) {
            result.push(arr[i++]);

        }
        else {
            result.push(brr[j++])
        }
    }

    while (i < arr.length) {
        result.push(arr[i++]);
    }

    while (j < brr.length) {
        result.push(brr[j++]);
    }
    return result;

}

console.log(mergeSorted([1, 3, 5], [2, 4, 6]));