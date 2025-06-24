// function SlidingWindowMaximum(arr, k) {
//     const deque = [];  // store indices of elements
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if(deque.length && deque[0]<=i-k){
//           deque.shift();
//         }
//         while(deque.length && arr[deque[deque.length - 1]] < arr[i]){
//             deque.pop();
//         }
//         deque.push(i);
//         // 4. Record the maximum (front of deque) once we have first full window
//         if (i >= k - 1) {
//             result.push(arr[deque[0]]);
//         }

//     }
//     return result;
// }


// let arr = [1, 3, -1, -3, 5, 3, 6, 7];

// let k = 3
// console.log(SlidingWindowMaximum(arr, k));

function maxSlidingWindowNaive(arr, k) {
    const result = [];

    for (let i = 0; i <= arr.length - k; i++) {
        let max = arr[i];
        for (let j = i + 1; j < i + k; j++) {
            if (arr[j] > max) {
                max = arr[j];
            }
        }
        result.push(max);
    }

    return result;
}

let arr = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;

console.log(maxSlidingWindowNaive(arr, k));  // Output: [3, 3, 5, 5, 6, 7]
