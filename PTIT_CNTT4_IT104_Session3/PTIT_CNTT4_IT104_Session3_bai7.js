function filter(input) {
    var result = "";
    var appear = "";
    for (var i = 0; i < input.length; i++) {
        var char = input[i];
        if (appear.indexOf(char) === -1) {
            result += char;
            appear += char;
        }
    }
    return result;
}
var str1 = "banana";
var str2 = "hello world";
console.log(filter(str1));
console.log(filter(str2));
