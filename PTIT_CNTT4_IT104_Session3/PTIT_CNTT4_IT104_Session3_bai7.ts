function filter(input: string): string{
    let result: string = "";
    let appear: string = "";
    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        if (appear.indexOf(char) === -1) {
            result += char;
            appear += char;
        }
    }
    return result;
}
let str1: string = "banana";
let str2: string = "hello world";
console.log(filter(str1));
console.log(filter(str2));