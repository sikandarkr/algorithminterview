function hasPairWithSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return true;
            }
        }
    }
    return false;
}

let arr = [1, 4, 7, 11];
let target = 15;
console.log("Pair exists:", hasPairWithSum(arr, target));
