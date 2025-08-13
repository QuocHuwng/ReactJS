function findFirstEven<T>(arr: T[], predicate: (item: T) => boolean): T | undefined {
    for (const item of arr) {
        if (predicate(item)) {
            return item;
        }
    }
    return undefined;
}
const numbers = [3, 7, 8, 11, 14];

const result = findFirstEven(numbers, (num) => typeof num === 'number' && num % 2 === 0);

console.log(result); 
