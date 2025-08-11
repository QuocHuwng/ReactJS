interface Geometry {
    calculateArea(): number;
    calculatePerimeter(): number;
}

class Circle implements Geometry {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle implements Geometry {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const myCircle = new Circle(5);
const myRectangle = new Rectangle(10, 20);

console.log("Circle:");
console.log("Dien tich:", myCircle.calculateArea());
console.log("Chu vi:", myCircle.calculatePerimeter());

console.log("Rectangle:");
console.log("Dien tich:", myRectangle.calculateArea());
console.log("Chu vi:", myRectangle.calculatePerimeter());