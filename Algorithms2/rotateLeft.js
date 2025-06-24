function rotateLeft(arr, d){

    let n = arr.length;

    d = d%n;


    let rotated = [];


    for(let i = d; i<n; i++){
       rotated.push(arr[i]);

    }
    for(let i=0; i<d; i++){
        rotated.push(arr[i]);

    }

    return rotated;
}

let arr = [1, 2, 3, 4, 5];
let d = 2;
console.log(rotateLeft(arr, d));