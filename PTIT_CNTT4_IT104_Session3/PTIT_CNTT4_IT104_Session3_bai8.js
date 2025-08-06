var convertToNumber = function (input) {
    if (typeof input === 'number') {
        return input;
    }
    var numberValue = parseFloat(input);
    if (!isNaN(numberValue)) {
        return numberValue;
    }
    return null;
};
var add = function (a, b) {
    var numA = convertToNumber(a);
    var numB = convertToNumber(b);
    if (numA !== null && numB !== null) {
        return numA + numB;
    }
    return "Input khong hop le";
};
var sub = function (a, b) {
    var numA = convertToNumber(a);
    var numB = convertToNumber(b);
    if (numA !== null && numB !== null) {
        return numA - numB;
    }
    return "Input khong hop le";
};
var mull = function (a, b) {
    var numA = convertToNumber(a);
    var numB = convertToNumber(b);
    if (numA !== null && numB !== null) {
        return numA * numB;
    }
    return "Input khong hop le";
};
var div = function (a, b) {
    var numA = convertToNumber(a);
    var numB = convertToNumber(b);
    if (numA !== null && numB !== null && numB !== 0) {
        return numA / numB;
    }
    return "Input khong hop le";
};
console.log(add("5", 3));
console.log(sub("10", "2"));
console.log(mull("4", "5"));
console.log(div(10, 0));
console.log(div("a", 3));
