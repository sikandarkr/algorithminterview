function maxOccurringChar(str) {
    let charCount = {};  // Object to store frequency
    let maxChar = '';
    let maxCount = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        // Count the occurrences
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }

        // Update maxChar on the fly
        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            maxChar = char;
        }
    }

    return maxChar;
}

let input = "abbcccddddeeeee";
console.log("Max occurring character:", maxOccurringChar(input));
