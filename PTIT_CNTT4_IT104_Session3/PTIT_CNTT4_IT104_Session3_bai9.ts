const add = (a: number, b: number): number => a + b;
const subtract = (a: number, b: number): number => a - b;
const multiply = (a: number, b: number): number => a * b;
const divide = (a: number, b: number): number | string => (b === 0 ? "Khong the chia cho 0" : a / b);
const power = (base: number, exponent: number): number => Math.pow(base, exponent);
const nthRoot = (base: number, root: number): number | string => (base < 0 && root % 2 === 0 ? "Loi can bac chan" : Math.pow(base, 1 / root));
const factorial = (n: number): number | string => {
    if (n < 0 || !Number.isInteger(n)) return "Chi ho tro so nguyen khong am";
    if (n === 0) return 1;
    let r = 1;
    for (let i = 2; i <= n; i++) r *= i;
    return r;
};

function getVal(id: string): number | null {
    const element = document.getElementById(id);
    const value = (element as any).value;
    const num = parseFloat(value);
    return isNaN(num) ? null : num;
}

const resultSpan = document.getElementById('resultSpan');

function performOp(operation: Function) {
    const num1 = getVal('input1');
    const num2 = getVal('input2');

    if (resultSpan) {
        if (num1 === null || num2 === null) {
            resultSpan.textContent = "Dau vao khong hop le";
        } else {
            resultSpan.textContent = operation(num1, num2).toString();
        }
    }
}

function computeFact() {
    const num1 = getVal('input1');
    if (resultSpan) {
        if (num1 === null) {
            resultSpan.textContent = "Dau vao khong hop le";
        } else {
            resultSpan.textContent = factorial(num1).toString();
        }
    }
}

document.getElementById('addBtn')?.addEventListener('click', () => performOp(add));
document.getElementById('subtractBtn')?.addEventListener('click', () => performOp(subtract));
document.getElementById('multiplyBtn')?.addEventListener('click', () => performOp(multiply));
document.getElementById('divideBtn')?.addEventListener('click', () => performOp(divide));
document.getElementById('powerBtn')?.addEventListener('click', () => performOp(power));
document.getElementById('sqrtBtn')?.addEventListener('click', () => performOp(nthRoot));
document.getElementById('factorialBtn')?.addEventListener('click', computeFact);