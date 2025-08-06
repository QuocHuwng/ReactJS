let sentence: string = "hello world apple banana orange pumpkin cucumber";
let words: string[] = sentence.split(" ");
let longest = "";

function isUnique(word: string): boolean {
    for (let i = 0; i < word.length; i++) {
        let count = 0;
        for (let j = 0; j < word.length; j++) {
            if (word[i] === word[j]) {
                count++;
            }
        }
        if (count > 1) {
            return false;
        }
    }
    return true;
}

for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (isUnique(word) && word.length > longest.length) {
        longest = word;
    }
}
console.log("Ket qua:", longest);
