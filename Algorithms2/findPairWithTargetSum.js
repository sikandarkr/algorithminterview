function findPairWithTargetSum(arr, target) {
    const seen = new Set();

    for (let num of arr) {
        let complement = target - num;
        if (seen.has(complement)) {
            return [complement, num];  // found the pair
        }
        seen.add(num);
    }

    return null;  // no pair found
}

let arr = [1, 4, 7, 11];
let target = 15;

console.log("Pair:", findPairWithTargetSum(arr, target));
