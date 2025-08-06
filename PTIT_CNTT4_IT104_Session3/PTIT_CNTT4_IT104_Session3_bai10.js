var sentence = "hello world apple banana orange pumpkin cucumber";
var words = sentence.split(" ");
var longest = "";
function isUnique(word) {
    for (var i = 0; i < word.length; i++) {
        var count = 0;
        for (var j = 0; j < word.length; j++) {
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
for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (isUnique(word) && word.length > longest.length) {
        longest = word;
    }
}
console.log("Ket qua:", longest);
