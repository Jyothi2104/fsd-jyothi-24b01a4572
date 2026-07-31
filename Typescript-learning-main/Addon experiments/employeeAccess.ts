class Employee {
    public name: string;
    private salary: number;
    protected dept: string;
    constructor(name: string, salary: number, dept: string) {
        this.name = name;
        this.salary = salary;
        this.dept = dept;
    }
    display() {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.dept);
    }
}
class Manager extends Employee {
    showDept() {
        console.log("Department:", this.dept);
    }
}
let emp = new Employee("Jyothi", 50000, "IT");
emp.display();
let mgr = new Manager("Rahul", 70000, "HR");
mgr.showDept();