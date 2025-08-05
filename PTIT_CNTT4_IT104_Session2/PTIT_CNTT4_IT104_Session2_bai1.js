function sum(number) {
    let even = 0;
    for (let num of number) {
        if (num % 2 === 0) {
            even += num;
        }
    }
    return even;
}
console.log(sum([1,2,3,4,5,6]));