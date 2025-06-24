function countDividingDigits(n) {
    let count = 0;
    let numStr = n.toString();

    for (let i = 0; i < numStr.length; i++) {
        let digit = parseInt(numStr[i]);

        if (digit !== 0 && n % digit === 0) {
            count++;
        }
    }

    return count;
}

let n = 1012;
console.log("Count of digits that divide", n, ":", countDividingDigits(n));
