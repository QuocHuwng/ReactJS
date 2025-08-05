function checkEndString(long, short) {
    return long.endsWith(short);
}
console.log(checkEndString("Hello, Word!", "Hello"));
console.log(checkEndString("Hi there!", "there!"));