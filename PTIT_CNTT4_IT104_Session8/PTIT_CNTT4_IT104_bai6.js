function findElement(arr, value) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        if (item === value) {
            return item;
        }
    }
    return undefined;
}
var names = ["An", "Binh", "Cuong"];
var result1 = findElement(names, "Binh");
console.log(result1);
var numbers = [1, 3, 5, 7];
var result2 = findElement(numbers, 4);
console.log(result2);
