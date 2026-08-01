//class with constructor and method
class Student {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    display(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}
//creating object of Student class
const s1 = new Student("Jyothi", 20);
s1.display();

//rectangle class
class Rectangle {
    length: number;
    width: number;
    constructor(length: number, width: number) {
        this.length = length;
        this.width = width;
    }
    area(): number {
        return this.length * this.width;
    }
}
const rect = new Rectangle(10, 5);
console.log("Area:", rect.area());

//person class
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    call(): void {
        console.log("Hello " + this.name);
    }
}
const p = new Person("Jyo");
p.call();