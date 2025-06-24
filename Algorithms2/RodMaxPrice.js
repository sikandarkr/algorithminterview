// What is the maximum revenue from a rod of length 8 given price list?

// price = [1, 5, 8, 9, 10, 17, 17, 20]
// n = 8

i =0;

function RodMaxPrice(price,n){
    let dp = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        let maxVal = -Infinity;
        for (let j = 0; j < i; j++) {
            maxVal = Math.max(maxVal, price[j] + dp[i - j - 1]);
        }
        dp[i] = maxVal;
    }

    return dp[n];
}

const prices = [1, 5, 8, 9, 10, 17, 17, 20];
console.log(RodMaxPrice(prices,8));