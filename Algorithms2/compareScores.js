function compareScores(alice, bob) {
    let alicePoints = 0;
    let bobPoints = 0;

    for (let i = 0; i < 3; i++) {
        if (alice[i] > bob[i]) {
            alicePoints++;
        } else if (alice[i] < bob[i]) {
            bobPoints++;
        }
        // else it's a tie → no points
    }

    return [alicePoints, bobPoints];
}

// Example usage
const alice = [5, 6, 7];
const bob = [3, 6, 10];

console.log(compareScores(alice, bob)); // Output: [1, 1]
