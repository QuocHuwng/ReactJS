const convertToNumber = (input: string | number): number | null => {
    if (typeof input === 'number') {
        return input;
    }
    const numberValue = parseFloat(input);
    if (!isNaN(numberValue)) {
        return numberValue;
    }
    return null;
};
const add = (a: string | number, b: string | number): number | string => {
    const numA = convertToNumber(a);
    const numB = convertToNumber(b);
    if (numA !== null && numB !== null) {
        return numA + numB;
    }
    return "Input khong hop le";
};
const sub = (a: string | number, b: string | number): number | string => {
    const numA = convertToNumber(a);
    const numB = convertToNumber(b);
    if (numA !== null && numB !== null) {
        return numA - numB;
    }
    return "Input khong hop le";
};
const mull = (a: string | number, b: string | number): number | string => {
    const numA = convertToNumber(a);
    const numB = convertToNumber(b);
    if (numA !== null && numB !== null) {
        return numA * numB;
    }
    return "Input khong hop le";
};
const div = (a: string | number, b: string | number): number | string => {
    const numA = convertToNumber(a);
    const numB = convertToNumber(b);
    if (numA !== null && numB !== null && numB !== 0) {
        return numA / numB;
    }
    return "Input khong hop le";
};
console.log(add("5",3));
console.log(sub("10", "2"));
console.log(mull("4","5"));
console.log(div(10,0));
console.log(div("a",3));