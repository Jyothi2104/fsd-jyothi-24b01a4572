class Student2 {
    name: string;
    static college = "SVECW";
    constructor(name: string) {
        this.name = name;
    }
    display() {
        console.log("Name:", this.name);
        console.log("College:", Student2.college);
    }
    static showCollege() {
        console.log("College:", Student2.college);
    }
}
let stu1 = new Student2("Jyothi");
let stu2 = new Student2("Sam");
stu1.display();
stu2.display();
Student2.showCollege();