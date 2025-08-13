function flatten<T>(arr: T[][]): T[] {
    const result: T[] = [];
    for (const subArr of arr) {
        result.push(...subArr);
    }
    return result;
}
const numbers = [[1, 2], [3, 4], [5, 6]];
const flatNumbers = flatten(numbers);
console.log(flatNumbers); 

const fruits = [['apple', 'banana'], ['cherry'], ['date', 'elderberry']];
const flatFruits = flatten(fruits);
console.log(flatFruits); 
