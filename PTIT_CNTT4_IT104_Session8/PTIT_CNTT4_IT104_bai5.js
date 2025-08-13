function findFirstEven(arr, predicate) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        if (predicate(item)) {
            return item;
        }
    }
    return undefined;
}
var numbers = [3, 7, 8, 11, 14];
var result = findFirstEven(numbers, function (num) { return typeof num === 'number' && num % 2 === 0; });
console.log(result);
