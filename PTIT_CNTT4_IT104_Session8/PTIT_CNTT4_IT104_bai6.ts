function findElement<T>(arr: T[], value: T): T | undefined {
    for (const item of arr) {
        if (item === value) {
            return item;
        }
    }
    return undefined;
}
const names = ["An", "Binh", "Cuong"];
const result1 = findElement(names, "Binh");
console.log(result1);

const numbers = [1, 3, 5, 7];
const result2 = findElement(numbers, 4);
console.log(result2); 
