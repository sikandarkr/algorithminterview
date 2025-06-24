function miniMaxSum(arr) {
    let totalSum = 0;
    let min = Infinity;
    let max = -Infinity;

    for (let num of arr) {
        totalSum += num;
        if (num < min) min = num;
        if (num > max) max = num;
    }

    const minSum = totalSum - max;
    const maxSum = totalSum - min;

    console.log(`Min Sum: ${minSum}, Max Sum: ${maxSum}`);
}

miniMaxSum([1, 2, 3, 4, 5]);
