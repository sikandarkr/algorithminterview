function findMissing(num, n) {

    let expectedSum = (n * (n + 1)) / 2;

    let actualSum = num.reduce((acc, n) => acc + n, 0);

    let sum = expectedSum-actualSum;

    return sum;
}

console.log(findMissing([1, 2, 3, 4, 5, 7, 8, 9, 10], 10));