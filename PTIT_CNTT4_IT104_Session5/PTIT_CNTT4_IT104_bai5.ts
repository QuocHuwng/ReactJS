class Rectangle{
    private width: number;
    private height: number;
    
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }


    public getWidth(): number{
        return this.width;
    }
    public getHeight(): number{
        return this.height;
    }


    public setWidth(width: number): void{
        this.width = width;
    }
    public setHeight(height: number): void{
        this.height = height;
    }

    public getArea(): number{
        return this.width * this.height;
    }
    public getPerimeter(): number{
        return 2 * (this.width + this.height);
    }
}
const rectangle1 = new Rectangle(5, 10);
console.log("Chieu rong: ", rectangle1.getWidth());
console.log("Chieu dai: ", rectangle1.getHeight());
console.log("Dien tich: ", rectangle1.getArea());
console.log("Chu vi: ", rectangle1.getPerimeter());

rectangle1.setWidth(7);
rectangle1.setHeight(12);
console.log("Sau khi update");
console.log("Chieu rong: ", rectangle1.getWidth());
console.log("Chieu dai: ", rectangle1.getHeight());
console.log("Dien tich: ", rectangle1.getArea());
console.log("Chu vi: ", rectangle1.getPerimeter());