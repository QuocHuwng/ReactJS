abstract class Job {
    type: string;

    constructor(type: string) {
        this.type = type;
    }

    printType(): void {
        console.log(`Loai cong viec: ${this.type}`);
    }

    abstract calculateSalary(): number;
}

class PartimeJob extends Job {
    workingHour: number;

    constructor(type: string, workingHour: number) {
        super(type);
        this.workingHour = workingHour;
    }

    calculateSalary(): number {
        return 30000 * this.workingHour;
    }
}

class FulltimeJob extends Job {
    constructor(type: string) {
        super(type);
    }

    calculateSalary(): number {
        return 10000000;
    }
}

const partime = new PartimeJob("Partime", 80);
const fulltime = new FulltimeJob("Fulltime");
partime.printType();
console.log(`Luong: ${partime.calculateSalary()} VND`);
fulltime.printType();
console.log(`Luong: ${fulltime.calculateSalary()} VND`);