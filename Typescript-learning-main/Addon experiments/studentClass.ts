class Student {
    id: number;
    name: string;
    marks: number;
    constructor(id: number, name: string, marks: number) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }
    display() {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Marks:", this.marks);
    }
}
let student = new Student(1, "Jyothi", 95);
student.display();