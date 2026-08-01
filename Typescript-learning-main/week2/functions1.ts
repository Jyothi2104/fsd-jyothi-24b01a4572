function addd(a: number, b: number): number {
    return a + b;
}

console.log(addd(10, 20));

function intro(name: string = "RAM"): void {
    console.log("Hello", name);
}

intro();
intro("Jyothi");


function student1(name: string, age?: number): void {
    console.log("Name:", name);

    if (age !== undefined) {
        console.log("Age:", age);
    }
}

student1("Sweety");
student1("preethi", 20);


function displayMark(...marks: number[]): void {
    console.log(marks);
}

displayMark(90, 85, 88, 95);