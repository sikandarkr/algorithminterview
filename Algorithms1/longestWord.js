function longestWord(arr) {

    let currentWord = "";
    let longWord = ""

    for (let i = 0; i < arr.length; i++) {

        let char = arr[i];
        


        if (char === " " || i === arr.length) {
           
            if (currentWord.length > longWord.length) {
               
                longWord = currentWord;
            }
            currentWord = "";
        }
        else {
            // console.log("your character is...",char);
            currentWord += char;
        }
    }
    return longWord;

}

console.log(longestWord("The quick brown fox jumps"));