const createUser = (name, age = 18, role = "user") => {
    return {
        name,
        age,
        role
    };
}
const user1 = createUser("Dev");
const user2 = createUser("Nguyen Van A", 20, "Admin");
console.log(user1);
console.log(user2);