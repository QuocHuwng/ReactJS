abstract class Shape {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    abstract getSize(): void;
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(name: string, width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }

    getSize(): void {
        console.log(`Kich thuoc cua ${this.getName()}:`);
        console.log(`Chieu rong: ${this.width}`);
        console.log(`Chieu cao: ${this.height}`);
    }
}

const myRectangle = new Rectangle("hinh chu nhat", 10, 20);
console.log("Ten hinh:", myRectangle.getName());
myRectangle.getSize();