enum weekDays{
    day2 = "Thu Hai",
    day3 = "Thu Ba",
    day4 = "Thu Tu",
    day5 = "Thu Nam",
    day6 = "Thu Sau",
    day7 = "Thu Bay",
    day8="Chu Nhat"
}
for (const day in weekDays) {
    console.log(weekDays[day as keyof typeof weekDays]);
}