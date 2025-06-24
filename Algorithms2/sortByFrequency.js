function sortByFrequency(arr) {

    const freqMap = {};
    let result = [];

    for (let i = 0; i < arr.length; i++) {

        if (freqMap[arr[i]]) {

            freqMap[arr[i]] += 1;
        }
        else {
            freqMap[arr[i]] = 1;
        }
    }

    for (let key in freqMap) {
        result.push({
            value: parseInt(key),
            freq: freqMap[key]
        });
    }

    for (let i = 0; i < result.length - 1; i++) {
        for (let j = 0; j < result.length - i - 1; j++) {
            let a = result[j];
            let b = result[j + 1];
            if (b.freq > a.freq || (b.freq === a.freq && b.value < a.value)) {

                const temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }

    }


    const finalResult = [];
    for (let i = 0; i < result.length; i++) {
        const { value, freq } = result[i];
        for (let j = 0; j < freq; j++) {
            finalResult.push(value);
        }
    }

    return finalResult;

}
const arr = [4, 6, 2, 4, 3, 4, 2, 2, 6];
console.log(sortByFrequency(arr));