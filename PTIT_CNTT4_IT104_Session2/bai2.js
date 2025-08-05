function greetingWithWeather(name, weather) {
    if (weather === "sunny") {
        return `chao ${name}! Hom nay troi nang tuyet voi!`;
    } else if (weather === "rainy") {
        return `chao ${name}! Hom nay troi mua, hay mang theo o!`;
    } else {
        return `chao ${name}! Hom nay thoi tiet khong xac dinh.`;
    }
}
console.log(greetingWithWeather("Nguyen An", "sunny"));
console.log(greetingWithWeather("Le Nam", "rainy"));
console.log(greetingWithWeather("Tran Tam","cloudy"));