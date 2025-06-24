function findCommonElements(arr1, arr2) {
    let common = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                // Check for duplicates in result
                let alreadyExists = false;
                for (let k = 0; k < common.length; k++) {
                    if (common[k] === arr1[i]) {
                        alreadyExists = true;
                        break;
                    }
                }

                if (!alreadyExists) {
                    common.push(arr1[i]);
                }
            }
        }
    }

    return common;
}

let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];
console.log("Common Elements:", findCommonElements(arr1, arr2));
