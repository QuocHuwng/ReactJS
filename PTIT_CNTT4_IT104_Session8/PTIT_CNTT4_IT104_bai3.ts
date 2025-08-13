function reverseArray<T>(arr: T[]): T[] {
    const reversed: T[] = [];
    for (let i = arr.length - 1; i >= 0; i--){
        reversed.push(arr[i]);
    }
    return reversed;
}
const numbers = [1, 2, 3, 4, 5];
console.log(reverseArray(numbers));
const names = ["Anh", "Chi", "Em"];
console.log(reverseArray(names));