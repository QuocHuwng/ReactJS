function flatten(arr) {
    var result = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var subArr = arr_1[_i];
        result.push.apply(result, subArr);
    }
    return result;
}
var numbers = [[1, 2], [3, 4], [5, 6]];
var flatNumbers = flatten(numbers);
console.log(flatNumbers);
var fruits = [['apple', 'banana'], ['cherry'], ['date', 'elderberry']];
var flatFruits = flatten(fruits);
console.log(flatFruits);
