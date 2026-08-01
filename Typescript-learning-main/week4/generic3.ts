interface Employee {
    id: number;
    name: string;
}

function display<T extends Employee>(emp: T): void {
    console.log("ID: " + emp.id);
    console.log("Name: " + emp.name);
}

display({
    id: 101,
    name: "Jyothi"
}); 