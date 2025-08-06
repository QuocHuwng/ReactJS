let fistName: string = "john";
let lastName: string = "doe";
function capLock(word: string): string{
    if (word.length === 0) return word;
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
fistName = capLock(fistName);
lastName = capLock(lastName);
let fullName: string = fistName + " " + lastName;
console.log("Full name:", fullName);