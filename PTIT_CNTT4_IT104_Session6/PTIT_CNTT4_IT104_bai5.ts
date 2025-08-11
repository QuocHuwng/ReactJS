interface ChangeSpeed {
    speedUp(): void;
    slowDown(): void;
    stop(): void;
}

class Vehicle implements ChangeSpeed {
    private speed: number;

    constructor() {
        this.speed = 0;
    }

    speedUp(): void {
        this.speed += 10;
        console.log(`Tang toc: ${this.speed} km/h`);
    }

    slowDown(): void {
        this.speed = Math.max(0, this.speed - 5);
        console.log(`Giam toc: ${this.speed} km/h`);
    }

    stop(): void {
        this.speed = 0;
        console.log(`Dung lai: ${this.speed} km/h`);
    }
}

const myVehicle = new Vehicle();

myVehicle.speedUp();    
myVehicle.speedUp();    
myVehicle.slowDown();  
myVehicle.stop();       