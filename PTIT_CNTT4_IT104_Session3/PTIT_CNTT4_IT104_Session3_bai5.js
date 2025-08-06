var fistName = "john";
var lastName = "doe";
function capLock(word) {
    if (word.length === 0)
        return word;
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
fistName = capLock(fistName);
lastName = capLock(lastName);
var fullName = fistName + " " + lastName;
console.log("Full name:", fullName);
