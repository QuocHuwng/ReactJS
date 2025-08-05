function displayUserInfo(user) {
    const {
        name = "Unknown",
        age = "Unknown",
        location: {
            city = "UnKnown city",
            country = "Unknown country"
        } = {},

        job: {
            title = "unknown", company = "unknown"
        } = {},

        contact: { email = "unknown", phone = "unknown"

        } = {}

    } = user;
    return `${name} is ${age} years old, lives in ${city}, ${country},works as ${title} at ${company}, and can be contacted via ${email} or ${phone}.`;
} 
console.log(displayUserInfo({
    name: "Anna",
    age: 30,
    location: {city: "Da Nang", country: "Vietnam"}
}));
console.log(displayUserInfo({
    name: "John",
    age: 25,
    location: { city: "HaNoi", country: "Vietnam" },
    contact: { email: "john@example.com", phone: "0123456789" },
    job: {title:"Developer", company:"Tech Corp"}
}));