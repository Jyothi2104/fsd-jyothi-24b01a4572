export class Student {
    name: string;
    marks: number;

    constructor(name: string, marks: number) {
        this.name = name;
        this.marks = marks;
    }

    display(): void {
        console.log("Name: " + this.name);
        console.log("Marks: " + this.marks);
    }
}