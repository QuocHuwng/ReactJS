var weekDays;
(function (weekDays) {
    weekDays["day2"] = "Thu Hai";
    weekDays["day3"] = "Thu Ba";
    weekDays["day4"] = "Thu Tu";
    weekDays["day5"] = "Thu Nam";
    weekDays["day6"] = "Thu Sau";
    weekDays["day7"] = "Thu Bay";
    weekDays["day8"] = "Chu Nhat";
})(weekDays || (weekDays = {}));
for (var day in weekDays) {
    console.log(weekDays[day]);
}
