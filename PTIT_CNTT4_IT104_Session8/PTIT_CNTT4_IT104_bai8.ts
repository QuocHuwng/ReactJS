function partialUpdate<T>(obj: T, updates: Partial<T>): T {
    return { ...obj, ...updates };
}
const original = { name: 'Alice', age: 30, job: 'Developer' };

const updated1 = partialUpdate(original, { age: 31 });
console.log(updated1);

const updated2 = partialUpdate(original, { name: 'Bob', job: 'Designer' });
console.log(updated2);