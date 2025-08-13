abstract class Animal{
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract makeNoise(): void;
    printName(): void{
        console.log(`Ten dong vat: ${this.name}`);
    }
}
class Cat extends Animal{
    makeNoise(): void {
        console.log(`meo meo`);
    }
}
class Dog extends Animal{
    makeNoise(): void {
        console.log(`gau gau`);
    }
}
const cat1 = new Cat("Con meo");
const dog1 = new Dog("Con cho");
cat1.printName();
cat1.makeNoise();

dog1.printName();
dog1.makeNoise();