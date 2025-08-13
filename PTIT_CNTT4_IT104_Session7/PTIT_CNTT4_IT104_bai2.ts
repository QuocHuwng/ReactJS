class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: string;
    constructor(name: string, speed: number, id: string) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() {
        this.speed -= 5;
    }
    speedUp() {
        this.speed += 5;
    }
    showSpeed(): void{
        `Toc do hien tai: ${this.speed}`;
    }
}
class Bicyle extends Vehicle{
    private gear: number;
    constructor(name: string, speed: number, id: string, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo(): void{
        console.log(`Ten phuong tien: ${this.name}`);
        console.log(`Toc do: ${this.speed}`);
        console.log(`Id: ${this.id}`);
        console.log(`So banh rang: ${this.gear}`);

    }
}
const bike = new Bicyle("RolRoyce", 4000, "1", 5);
bike.showInfo();
bike.showSpeed();
bike.slowDown();
bike.speedUp();