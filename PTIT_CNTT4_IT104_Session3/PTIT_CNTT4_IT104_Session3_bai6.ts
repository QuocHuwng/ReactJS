let num1: number = 20;
let num2: number = 5;
let num3: number;
let num4: string = "10";
let num5: boolean = true;

num3 = num1 + num2;
console.log("Cong:", num3);

num1 = num3 - num2;
console.log("Tru:", num1);

num3 = num1 * num2;
console.log("Nhan:",num3);

num2 = num3 / num1;
console.log("Chia:",num2);

let sum = num4 + num5;
console.log("phep cong num4 + num5:", sum);
// Khi cộng chuỗi với boolean, TypeScript  sẽ ép kiểu tự động: chuyển boolean thành chuỗi rồi nối chuỗi
// =>> "10" + true ➝ "10true" đây không phải phép cộng số học, mà là nối chuỗi

