export default class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    show(): void {
        console.log("Name: " + this.name);
    }
}