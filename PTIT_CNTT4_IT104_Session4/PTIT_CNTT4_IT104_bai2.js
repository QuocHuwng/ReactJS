var point = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
var sum = 0;
var average;
for (var i = 0; i < point.length; i++) {
    sum += point[i];
}
average = sum / point.length;
console.log("Diem Trung Binh: ", average.toFixed(2));
