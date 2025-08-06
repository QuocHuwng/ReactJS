var _a, _b, _c, _d, _e, _f, _g;
var add = function (a, b) { return a + b; };
var subtract = function (a, b) { return a - b; };
var multiply = function (a, b) { return a * b; };
var divide = function (a, b) { return (b === 0 ? "Khong the chia cho 0" : a / b); };
var power = function (base, exponent) { return Math.pow(base, exponent); };
var nthRoot = function (base, root) { return (base < 0 && root % 2 === 0 ? "Loi can bac chan" : Math.pow(base, 1 / root)); };
var factorial = function (n) {
    if (n < 0 || !Number.isInteger(n))
        return "Chi ho tro so nguyen khong am";
    if (n === 0)
        return 1;
    var r = 1;
    for (var i = 2; i <= n; i++)
        r *= i;
    return r;
};
function getVal(id) {
    var element = document.getElementById(id);
    var value = element.value;
    var num = parseFloat(value);
    return isNaN(num) ? null : num;
}
var resultSpan = document.getElementById('resultSpan');
function performOp(operation) {
    var num1 = getVal('input1');
    var num2 = getVal('input2');
    if (resultSpan) {
        if (num1 === null || num2 === null) {
            resultSpan.textContent = "Dau vao khong hop le";
        }
        else {
            resultSpan.textContent = operation(num1, num2).toString();
        }
    }
}
function computeFact() {
    var num1 = getVal('input1');
    if (resultSpan) {
        if (num1 === null) {
            resultSpan.textContent = "Dau vao khong hop le";
        }
        else {
            resultSpan.textContent = factorial(num1).toString();
        }
    }
}
(_a = document.getElementById('addBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { return performOp(add); });
(_b = document.getElementById('subtractBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () { return performOp(subtract); });
(_c = document.getElementById('multiplyBtn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () { return performOp(multiply); });
(_d = document.getElementById('divideBtn')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () { return performOp(divide); });
(_e = document.getElementById('powerBtn')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', function () { return performOp(power); });
(_f = document.getElementById('sqrtBtn')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', function () { return performOp(nthRoot); });
(_g = document.getElementById('factorialBtn')) === null || _g === void 0 ? void 0 : _g.addEventListener('click', computeFact);
